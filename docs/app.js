const passages = [
  ['p1', '일부 사례로 전체를 판단하기', '04:13', '영상 속 히틀러는 일부 유대인의 정치 활동을 보고 유대인 전체가 독일을 배반한다고 몰아갔다. 같은 활동에 반대하는 유대인이 많다고 언급하면서도, 그들 역시 속으로는 같은 편일 것이라고 단정했다.'],
  ['p2', '근거 없이 책임 돌리기', '04:13–05:19', '그는 유대인 개인이 관련된 한 사례를 보고 독일에 퍼진 질병의 원인이 유대인 전체에 있다고 주장했다. 그 사례가 질병 확산과 어떤 관련이 있는지 보여 주는 근거는 제시하지 않았다.'],
  ['p3', '반박을 음모로 해석하기', '05:19', '그는 자신의 주장과 다른 이야기를 전하는 언론과 문화가 조작되고 있다고 주장했다. 다른 설명이 나올 때마다 조작의 결과라고 간주하면, 어떤 증거가 나와야 자신의 판단을 바꿀지 답하기 어려워진다.'],
  ['p4', '사회 차이를 혈통 탓으로 돌리기', '06:24–07:27', '그는 북미와 남미의 경제와 문화 차이를 혈통으로 설명하려 했다. 또 서로 다른 동물 종의 사례를 인간 사회에 가져와 집단 사이에 우열이 있다고 주장했다.'],
  ['p5', '편견을 국가 정책으로 만들기', '08:31', '그는 국가가 시민을 혈통에 따라 분류하고, 누구에게 아이를 낳을 권리를 줄지 결정해야 한다고 주장했다. 이 정책은 그가 내세운 인종 우열을 기준으로 사람의 권리를 제한하는 것이었다.']
];

const $ = (id) => document.getElementById(id);
const config = window.CLASSROOM_CONFIG;
const demo = !config.url || !config.publishableKey;
const demoKey = 'reading-comments-demo-v1';
const roomKey = 'reading-comments-room-' + config.url;
const paragraphs = new Map();
const comments = new Map();
let client;
let room;
let selection;
let draft;
let refreshTimer;

function node(tag, content) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

for (const [id, heading, time, text] of passages) {
  const section = node('section', '');
  const paragraph = node('p', text);
  paragraph.dataset.paragraph = id;
  paragraphs.set(id, { paragraph, text });
  const button = node('button', '이 문단에 댓글 쓰기');
  button.type = 'button';
  button.onclick = () => choose({ paragraph: id, start_offset: 0, end_offset: text.length });
  section.append(node('h3', heading), node('time', time), paragraph, button);
  $('reading').append(section);
}

function selectedRange() {
  const current = window.getSelection();
  if (!current?.rangeCount || current.isCollapsed) return;
  const range = current.getRangeAt(0);
  const paragraph = range.commonAncestorContainer.parentElement?.closest('p[data-paragraph]')
    ?? (range.commonAncestorContainer.matches?.('p[data-paragraph]') ? range.commonAncestorContainer : null);
  if (!paragraph || !range.toString().trim()) return;
  const prefix = range.cloneRange();
  prefix.selectNodeContents(paragraph);
  prefix.setEnd(range.startContainer, range.startOffset);
  const start = prefix.toString().length;
  return { paragraph: paragraph.dataset.paragraph, start_offset: start, end_offset: start + range.toString().length };
}

document.addEventListener('selectionchange', () => {
  const range = selectedRange();
  if (range) selection = range;
  else if (!window.getSelection()?.isCollapsed) selection = undefined;
});
$('use-selection').addEventListener('pointerdown', (event) => event.preventDefault());
$('use-selection').onclick = () => {
  const range = selectedRange() ?? selection;
  if (range) choose(range);
  else $('notice').textContent = '한 문단 안에서 반박할 구절을 먼저 선택해 주세요.';
};

function quote(anchor) {
  return paragraphs.get(anchor.paragraph)?.text.slice(anchor.start_offset, anchor.end_offset) ?? '';
}

function choose(anchor) {
  if ($('discussion').hidden) {
    $('notice').textContent = '학급 참여 코드로 먼저 입장해 주세요.';
    $('code').focus();
    return;
  }
  draft = anchor;
  $('picked').textContent = quote(anchor);
  $('compose').hidden = false;
  $('notice').textContent = '';
  $('body').focus();
}

function highlight(anchor) {
  for (const { paragraph, text } of paragraphs.values()) paragraph.textContent = text;
  const { paragraph, text } = paragraphs.get(anchor.paragraph);
  const mark = node('mark', quote(anchor));
  paragraph.replaceChildren(text.slice(0, anchor.start_offset), mark, text.slice(anchor.end_offset));
  paragraph.scrollIntoView({ block: 'center' });
}

function render() {
  const list = $('comments');
  list.replaceChildren();
  if (!comments.size) list.append(node('p', '아직 댓글이 없어요. 첫 반박을 남겨 보세요.'));
  const ordered = [...comments.values()].sort((a, b) => b.created_at.localeCompare(a.created_at));
  for (const comment of ordered) {
    const card = node('section', '');
    card.className = 'comment';
    const jump = node('button', '본문에서 보기');
    jump.type = 'button';
    jump.className = 'jump';
    jump.onclick = () => highlight(comment);
    card.append(node('strong', comment.alias), node('blockquote', quote(comment)), node('p', comment.body), jump);
    list.append(card);
  }
}

function readDemo() {
  comments.clear();
  for (const comment of JSON.parse(localStorage.getItem(demoKey) ?? '[]')) comments.set(comment.id, comment);
  render();
}

async function loadComments() {
  const { data, error } = await client.from('reading_comments').select('*').eq('room_id', room)
    .order('created_at', { ascending: false }).limit(200);
  if (error) {
    $('notice').textContent = '댓글을 불러오지 못했어요. 새로고침해 주세요.';
    return;
  }
  if ($('notice').textContent === '댓글을 불러오지 못했어요. 새로고침해 주세요.') $('notice').textContent = '';
  comments.clear();
  for (const comment of data) comments.set(comment.id, comment);
  render();
}

function refresh() {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    refreshTimer = 0;
    reloadQueue = reloadQueue.then(loadComments);
  }, 120);
}

let reloadQueue = Promise.resolve();
$('switch-room').onclick = () => { localStorage.removeItem(roomKey); location.reload(); };

function openRoom(id) {
  room = id;
  $('switch-room').hidden = false;
  localStorage.setItem(roomKey, room);
  $('join').hidden = true;
  $('discussion').hidden = false;
  $('status').textContent = '학급 입장 · 연결 중';
  client.channel('class-' + room)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'reading_comments', filter: 'room_id=eq.' + room }, refresh)
    .subscribe((status) => {
      $('status').textContent = status === 'SUBSCRIBED' ? '학급 입장 · 실시간 연결' : '실시간 연결 확인 중';
      if (status === 'SUBSCRIBED') refresh();
    });
  refresh();
  window.addEventListener('focus', refresh);
}

$('compose').onsubmit = async (event) => {
  event.preventDefault();
  const alias = $('alias').value.trim();
  const body = $('body').value.trim();
  if (!draft || !alias || !body) {
    $('notice').textContent = '별명과 반박 내용을 모두 적어 주세요.';
    return;
  }
  const button = event.currentTarget.querySelector('button');
  button.disabled = true;
  try {
    const fields = { ...draft, alias, body };
    if (demo) {
      const comment = { ...fields, id: crypto.randomUUID(), created_at: new Date().toISOString() };
      const stored = JSON.parse(localStorage.getItem(demoKey) ?? '[]');
      localStorage.setItem(demoKey, JSON.stringify([...stored, comment]));
      readDemo();
    } else {
      const { error } = await client.from('reading_comments').insert({ ...fields, room_id: room });
      if (error) throw error;
      refresh();
    }
    $('body').value = '';
    $('compose').hidden = true;
    $('notice').textContent = '댓글을 저장했어요.';
  } catch {
    $('notice').textContent = '댓글을 저장하지 못했어요. 다시 시도해 주세요.';
  } finally {
    button.disabled = false;
  }
};

$('join').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.disabled = true;
  try {
    const code = $('code').value.trim();
    if (!/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(code)) {
      $('notice').textContent = '학급 코드 전체를 붙여 넣어 주세요.';
      return;
    }
    const { data } = await client.auth.getSession();
    if (!data.session) {
      const { error } = await client.auth.signInAnonymously();
      if (error) {
        $('notice').textContent = '입장 계정을 만들지 못했어요. 선생님께 연결 설정을 확인해 달라고 해 주세요.';
        return;
      }
    }
    const { data: id, error } = await client.rpc('join_reading_room', { code });
    if (error) {
      $('notice').textContent = '학급에 입장하지 못했어요. 코드와 연결 상태를 확인해 주세요.';
      return;
    }
    $('code').value = '';
    $('notice').textContent = '';
    openRoom(id);
  } catch {
    $('notice').textContent = '연결에 문제가 생겼어요. 다시 시도해 주세요.';
  } finally {
    button.disabled = false;
  }
};

async function start() {
  if (demo) {
    $('status').textContent = '체험 모드 · 이 브라우저에만 저장';
    $('discussion').hidden = false;
    readDemo();
    window.addEventListener('storage', (event) => { if (event.key === demoKey) readDemo(); });
    return;
  }
  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2.110.0');
    client = createClient(config.url, config.publishableKey);
    const { data } = await client.auth.getSession();
    const lastRoom = localStorage.getItem(roomKey);
    if (data.session && lastRoom) {
      openRoom(lastRoom);
    } else {
      $('status').textContent = '학급 입장 대기';
      $('join').hidden = false;
    }
  } catch {
    $('status').textContent = '연결 오류';
    $('notice').textContent = 'Supabase URL과 공개 키, 인터넷 연결을 확인해 주세요.';
  }
}

start();


