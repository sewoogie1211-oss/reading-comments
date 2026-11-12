const previousPassages = [
  ['p1', '일부 사례로 전체를 판단하기', '04:13', '영상 속 히틀러는 일부 유대인의 정치 활동을 보고 유대인 전체가 독일을 배반한다고 몰아갔다. 같은 활동에 반대하는 유대인이 많다고 언급하면서도, 그들 역시 속으로는 같은 편일 것이라고 단정했다.'],
  ['p2', '근거 없이 책임 돌리기', '04:13–05:19', '그는 유대인 개인이 관련된 한 사례를 보고 독일에 퍼진 질병의 원인이 유대인 전체에 있다고 주장했다. 그 사례가 질병 확산과 어떤 관련이 있는지 보여 주는 근거는 제시하지 않았다.'],
  ['p3', '반박을 음모로 해석하기', '05:19', '그는 자신의 주장과 다른 이야기를 전하는 언론과 문화가 조작되고 있다고 주장했다. 다른 설명이 나올 때마다 조작의 결과라고 간주하면, 어떤 증거가 나와야 자신의 판단을 바꿀지 답하기 어려워진다.'],
  ['p4', '사회 차이를 혈통 탓으로 돌리기', '06:24–07:27', '그는 북미와 남미의 경제와 문화 차이를 혈통으로 설명하려 했다. 또 서로 다른 동물 종의 사례를 인간 사회에 가져와 집단 사이에 우열이 있다고 주장했다.'],
  ['p5', '편견을 국가 정책으로 만들기', '08:31', '그는 국가가 시민을 혈통에 따라 분류하고, 누구에게 아이를 낳을 권리를 줄지 결정해야 한다고 주장했다. 이 정책은 그가 내세운 인종 우열을 기준으로 사람의 권리를 제한하는 것이었다.']
];

const transcript = [
  [
    "t1-1",
    "01:00",
    "어느 날 아버지가 뇌출혈 발작으로 죽고, 머지않아 어머니도 세상을 떠나게 되었다. 갑작스레 닥친 현실. 어린 나는 빵을 얻기 위해 어떤 일이든 해야 했다. 가난에 시달리며 비참하게 지냈다. 시시한 화가 일을 하다가 노가다를 다니기도 했다. 노가다 판에서는 점심시간만 되면 자기들끼리 모여 끊임없이 정치 얘기를 한다. 자본가 계급이 어떻고 프롤레타리아가 어떻고…. 물론 처음에야 별로 대수롭지 않게 생각했지만, 그들의 궤변을 듣고 있다 보니 점점 참을 수 없게 되었다. “아니, 그건 논리적으로 말이 안되잖아요.” “뭐야? 사회주의가 뭔지도 모르는 놈이!” 나는 그날 이후 그놈들에게 반박하기 위해 닥치는 대로 책을 읽었다. 며칠이 지났을까? 나는 더 많은 지식과 팩트를 들고 와 그놈들에게 대항했다.",
    [21, 44, 56, 85, 104, 132, 175, 200, 201, 227, 260, 265, 284, 308, 347, 357, 390]
  ],
  [
    "t2-1",
    "02:05",
    "그들은 짐짓 당황하더니 논리적인 반박 대신 일방적인 해고 통보를 날렸다. 그 순간 분노가 치밀어 올랐다. 이딴 놈들도 위대한 독일 민족인가? 물론 그 덕에 깨달은 게 하나 있다. 바로 진짜 독서하는 법이다. 진짜 공부란, 진짜 독서란 본질만 갖고 오고, 그렇지 않은 건 다 버려야 한다는 것이다. 역사 책을 읽을 때 몇 년도에 전쟁이 일어났는지, 장군 이름이나 왕 이름을 외우고 있는 건 정말 아무런 의미도 없는 짓이다. 나는 진짜 독서를 했다. 나에게 필요한 것만 배우며 열심히 독서를 했다. 책을 읽으면서 알게 된 정보가 있다. 사회주의를 만든 마르크스가 유대인이라는 사실이다. 원래 나는 유대인에 대한 관심이 없었다. 아니, 솔직히 말하면, 가벼운 혐오감 정도는 있었다. 유대인이 누군가? 성경에도 나오듯, 예수를 못 박아 죽인 인간들 아닌가? 혐오스러워. 그러나 한편으로는 오히려 그런 생각을 하는 내가 혐오스러웠다. 유대인도 독일 사람이라고 생각했으니까. 우리와 다른 점은 종교적인 가치관뿐이니까. 그래서 유대인을 싫어하는",
    [39, 57, 98, 114, 122, 140, 164, 192, 234, 248, 275, 296, 324, 347, 351, 360, 377, 397, 418, 425, 460, 482, 506]
  ],
  [
    "t2-2",
    "",
    "사람들은 죄다",
    []
  ],
  [
    "t3-1",
    "03:09",
    "민주주의나 대민족이라는 개념을 못 받아들이는 무식한 놈들이라 생각했다. 왜냐고? 학교가 그렇게 가르치니까. 왜냐고? 신문이 그렇게 얘기하니까. 그런데 그거 아는가? 놀랍게도 신문과 책은 바른 말만 하지 않는다. 오히려 누군가의 목적과 이데올로기에 의해 조작될 때가 더 많다. 이 사실을 깨닫고부터 나는 권위에 맞서기로 마음 먹었다. 감성을 내쫓고 오로지 이성적으로만 생각하자. 그리고 그때 내 이성은 이렇게 말했다. “유대인은 미개해.” 그래서 나는 난생 처음으로 반유대주의 책을 샀다. 그러나 그 책의 논리는 유대인들이 말하는 것보다도 천박하고 훨씬 비논리적이었다. “대체 뭐가 진실이지?” 나는 결국 제자리로 돌아올 수밖에 없었다. 처음에는 걱정했다. 현재 독일 인구의 3% 정도밖에 안 되는 유대인이 독일 경제의 40%를 책임지고 있다. 아니, 유대인이 진짜 미개하고 멍청하다면 왜 그놈들은 그렇게 많은 돈을 버는 걸까? 왜 그 놈들은 사회적으로 인정을 받는 걸까? 나는 진실을 찾기 위해 닥치는 대로 유대인을",
    [38, 58, 78, 116, 152, 184, 209, 231, 242, 271, 316, 354, 365, 414, 418]
  ],
  [
    "t3-2",
    "",
    "만나기 시작했다. 한 명, 두 명, 세 명….",
    [8, 23, 24]
  ],
  [
    "t4-1",
    "04:13",
    "그렇게 경험을 넓혀가니 점차 가닥이 잡혔다. 이놈들은 생김새도 독일인과 미묘하게 다르다. 그리고 대부분이 몸에서 냄새가 났다. 늘 더러운 옷을 입고 다니고, 생긴 것도 볼품 없었다. 그들이 더 혐오스러워졌다. 그리고 무엇보다도…. “이스라엘 독립 만세!” 광장에 나와 독립운동을 하는 유대인 몇몇을 보고부터는 그 혐오감이 더욱 짙어졌다. 독일에서 먹고 나고 잤으면서 독일을 배반하려 들다니! 이놈들의 사고방식은 제정신이 아니다. 물론 대부분의 유대인은 독립운동에 반대하고 있지만, 아무튼 마음속으로는 한패임이 틀림없다. 나는 유대인 생각을 하며 오랫동안 고민했다. 그때 마침내 보고야 말았다. 매춘업을 하는 유대인 포주를! 순간 등골이 오싹해졌다. 지금 독일 방방곳곳에 매독이 퍼지고 있다. 그리고 그 근본적인 원인이 저기에 있다. 나는 드디어 우리 민족을 망가뜨리는 범인이 누구인지 알아낸 것이다. 그래, 미개한 유대인이 돈을 많이 벌고 사회적으로 인정받는 이유는 뻔하다. 예수님을 박해한 이 새끼들은 어차피 천국에 가지 못한다.",
    [23, 48, 69, 86, 100, 115, 126, 127, 187, 217, 238, 267, 289, 314, 330, 361, 385, 408, 446, 450, 488, 520]
  ],
  [
    "t4-2",
    "",
    "그렇기에 살아생전만이라도 잘 나가는 거지. 엄밀히 따지면, 유대인은 똑똑한 게 아니라",
    [22, 31]
  ],
  [
    "t5-1",
    "05:19",
    "비겁한 것에 가깝다. 생각해보자. 우리 인류는 수백 년 지식 위에 서 있다. 그런데 그 지식을 누가 쌓아 왔는가? 그렇다, 우리 아리아인이다! 유대인은 자기 문화 없이 우리 민족이 쌓은 지식 위에 무임승차하고 있을 뿐이다. 그러면서 이제는 우리 독일인을 망가뜨리기 위해 온갖 수를 쓰기 시작한다. 경제적으로, 정치적으로, 군대를 무너뜨리고, 문화를 오염시키고, 종교를 희롱하려 든다. 그건 억측 아니냐고? 아니, 당신은 그렇게 믿고 싶은 것뿐이다. 그렇게 교육받았으니까. 세상에 있는 모든 교육은 누군가의 의도에 따라 가공되어서 전해진다. 현재 독일 신문과 예술계는 유대인으로 가득하다. 그곳에서 유대인은 사람들의 정신을 조작하려 든다. 우리가 접하는 모든 언론, 모든 공연, 모든 소설이 유대인이 대단한 민족인 것 마냥 포장해대지만, 그건 사실이 아니다. 당신에게 정말로 필요한 건 뭔가? 비판적 태도다. 현인들이 말해왔듯, 내가 가진 세계를 버려야 한다는 통찰과 다시 태어나겠다는 각오가 있을 때 비로소 훌륭한 행동을 할 수",
    [10, 17, 41, 67, 123, 164, 171, 178, 189, 200, 213, 229, 249, 262, 300, 327, 355, 410, 422, 450, 461]
  ],
  [
    "t5-2",
    "",
    "있다. 독일은 유대인을 멀리해야 한다.",
    [2, 20]
  ],
  [
    "t6-1",
    "06:24",
    "여러 민족이 함께 사는 나라는 반드시 망하기 때문이다. 미국이 실제로 그렇다. 남미 사람들은 인디언과의 혼혈이 많아, 그 수준이 아주 미개하기 그지없다. 반면 순혈로 가득한 북미는 어떤가? 훨씬 더 잘 산다. 훨씬 더 훌륭한 문화를 가진다. 남미에 비해 북미가 잘 되는 이유는 명백히 혼혈이 얼마나 많은가에 대한 차이라고 볼 수 있다. 그리고 이 가설은 생물학으로 증명 가능하다. 원래 자연에서는 어떤 동물이든 같은 종끼리만 짝을 짓는다. 늑대는 늑대끼리 하고, 생쥐는 생쥐끼리 한다. 너무나 당연한 얘기지. 그러나 자연의 법칙을 거스르고 다른 종과 강제로 관계를 맺게 한다면? 그때 잡종이 생긴다. 한쪽이 아무리 우수한 생물일지라도, 나머지 한쪽이 미개한 생물이라면 미개한 잡종이 태어나게 되는 것이다. 적어도 우수한 부모에게서 태어나는 아이보다 훨씬 더 미개하다는 건 당연지사. 그러면 지금처럼 미개한 생물이 끊임없이 우수한 생물을 겁탈하려 드는 상황은 어떻게 해야 할까? 이를 막기 위한 방법은 오직 하나. 열등 생물이",
    [29, 42, 64, 84, 115, 133, 186, 211, 244, 257, 270, 283, 334, 354, 393, 436, 509]
  ],
  [
    "t6-2",
    "",
    "기어오르지 못하도록 철저하게 짓밟는 것!",
    []
  ],
  [
    "t7-1",
    "07:27",
    "어설픈 동정심으로 미안해해선 안 된다. 더 우수하고 강한 생물이 싸움에서 이기고 상대를 지배하는 일은 자연의 법칙과도 같으니까. 보아라. 고양이가 쥐에게 연민을 갖던가? 호랑이가 토끼를 불쌍해 하던가? 그렇다면 과연 어떤 종이 가장 우월할까? 답은 우리 모두가 알고 있다. 바로 독일인이 속하는 아리아인이다! 인류를 감동시키는 과학과 예술, 기술과 발명은 어떤 민족이 만들었는가? 우리다! 창의력은 오직 아리아인만이 가질 수 있는 능력이다! 뭐? 아니라고? 일본인들과 중국인들은 뭐냐고? 그놈들은 우리 문화를 가져다가 자기네 문화처럼 둔갑시킨 것에 불과하다. 뭐, 독일 민족은 고대엔 미개하지 않았냐고? 당시의 인프라가 부족해서 그렇지, 우리가 그리스 땅에 있었더라면 문화를 꽃피웠을 것이 분명하다. 뿐만 아니다. 공동체를 위한 헌신과 봉사도 아리아 인종만이 갖춘 능력이다. 그렇다면 결론은 정해져 있다. 지구가 발전하고 진짜 평화가 찾아오게 하려면 어떻게 해야 할까? 그렇다. 독일인이 세계를 정복하고 피의",
    [20, 70, 75, 151, 311, 314, 355, 390, 398, 432, 449, 490]
  ],
  [
    "t7-2",
    "",
    "순수성을 유지하기 위해 애써야 한다. 사다리를 오르듯이",
    [19]
  ],
  [
    "t8-1",
    "08:31",
    "열등인을 밟고 올라가야 한다. 이를 위한 가장 최적의 수단이 바로 국가다. 국가는 형식에 불과하다. 국가는 인종을 지키기 위한 수단이며 우등 인류 존립의 전제다. 국가가 직접 나서서 몸 건강하고 하자 없는 사람만이 아이를 낳게 해야한다. 최신 의학을 동원해 조금이라도 약하고 결함이 있는 사람들은 모두 생식기를 잘라내야 한다. 또한 전담 인종 위원회를 만들어, 시민들을 조사하고, 인종을 증명시켜야한다. 그렇게 해서 피의 순수성이 입증된 건강한 아이들만이 태어날 수 있도록 해야 한다. 이렇게 태어난 아이들은 어떤 계급 출신이든, 이들 모두에게 기회와 평등이 주어져야한다. 최하층민이라도, 육체 노동을 하더라도, 그들 모두 우수한 혈통을 지닌 자로서 재능을 인정받고 존중받아야 한다. 그리하여 독일의 도로 청소부가 다른 나라 왕보다 더 큰 명예일 수 있도록, 국가는 가장 훌륭한 혈통의 민족에게 최고의 보상을 줘야 한다. 마지막으로 내가 이 책에서 하고픈 말은, 가장 중요한 걸 잊지 말라는 것이다.",
    [15, 40, 54, 89, 131, 181, 200, 211, 224, 270, 295, 319, 328, 341, 381, 423, 458, 481, 502]
  ],
  [
    "t9-1",
    "09:35",
    "이 장대한 계획을 막아서는 가장 큰 장애물이 무엇이라 생각하는가? 영국? 프랑스? 미국? 일본? 아니, 유대인이다. 앞서 말했듯, 유대인은 독자적인 생산 능력이 없는 기생충 같은 존재다. 이들은 오로지 무분별한 성교로 독일 인종의 수준을 떨어뜨리는 것에만 관심이 있다. 이제 그들은 러시아를 넘어 독일 제국을 파멸시키려 하고 있다. 그렇다, 무조건 그렇다! 그것이 유대인 삶의 목표니까. 유럽에서 유대인의 경제 장악은 완료되었다. 유대인은 계획적으로 세계대전을 부추기고 있다. 나는 그리 믿어 의심치 않는다. 그것이 유대인 삶의 목표니까. 이 세계는 이제 두 가지 갈림길에 놓여 있다. 아리아인의 행복이냐, 유대인의 이익이냐? 독일인이여, 목적을 잊지 말라. 우리의 목적은 민족의 존립과 증식, 피의 순결을 유지하는 것이다. 나의 뜻이 아니다. 이는 자연의 의지다. 창조자의 의지다. 가장 뛰어난 인종인 우리가 해야 하는 일은 오직 하나. 잡종과의 투쟁이다.",
    [56, 63, 71, 103, 149, 184, 189, 215, 239, 265, 283, 300, 326, 338, 349, 356, 367, 387, 404, 415, 427, 437, 468, 479]
  ]
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

for (const [id, , , text] of previousPassages) paragraphs.set(id, { text });

// Stored anchors use the original transcript offsets so earlier comments still match.
function transcriptOffsets(text, insertions) {
  const inserted = new Set(insertions);
  const toOriginal = [0];
  const toDisplay = [0];
  for (let display = 0; display < text.length; display++) {
    const original = toOriginal[display] + (inserted.has(display) ? 0 : 1);
    toOriginal.push(original);
    toDisplay[original] = display + 1;
  }
  return { toOriginal, toDisplay };
}

let section;
for (const [id, time, text, insertions] of transcript) {
  if (time) {
    section = node('section', '');
    section.append(node('time', time));
    $('reading').append(section);
  }
  const paragraph = node('p', text);
  paragraph.dataset.paragraph = id;
  paragraphs.set(id, { paragraph, text, ...transcriptOffsets(text, insertions) });
  section.append(paragraph);
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
  const id = paragraph.dataset.paragraph;
  const { toOriginal } = paragraphs.get(id);
  const displayStart = prefix.toString().length;
  const start = toOriginal[displayStart];
  const end = toOriginal[displayStart + range.toString().length];
  if (start === end) return;
  return { paragraph: id, start_offset: start, end_offset: end };
}

const selectionButton = $('use-selection');

document.addEventListener('selectionchange', () => {
  const range = selectedRange();
  if (range) {
    selection = range;
  } else if (!window.getSelection()?.isCollapsed) {
    selection = undefined;
  }
  selectionButton.disabled = !selection;
});

document.addEventListener('pointerdown', (event) => {
  if (selectionButton.contains(event.target)) return;
  selection = undefined;
  selectionButton.disabled = true;
});

selectionButton.addEventListener('mousedown', (event) => event.preventDefault());
selectionButton.onclick = () => {
  const range = selectedRange() ?? selection;
  if (!range) return;
  choose(range);
  selection = undefined;
  window.getSelection()?.removeAllRanges();
  selectionButton.disabled = true;
};

function displayRange(anchor, entry) {
  return {
    start: entry.toDisplay?.[anchor.start_offset] ?? anchor.start_offset,
    end: entry.toDisplay?.[anchor.end_offset] ?? anchor.end_offset
  };
}

function quote(anchor) {
  const entry = paragraphs.get(anchor.paragraph);
  if (!entry) return '';
  const { start, end } = displayRange(anchor, entry);
  return entry.text.slice(start, end);
}

function choose(anchor) {
  if ($('discussion').hidden) {
    $('notice').textContent = '학급 참여 코드로 먼저 입장해 주세요.';
    if (!$('join').hidden) $('code').focus();
    return;
  }
  draft = anchor;
  $('picked').textContent = quote(anchor);
  $('compose').hidden = false;
  $('notice').textContent = '';
  $('body').focus();
}

function highlight(anchor) {
  for (const { paragraph, text } of paragraphs.values()) {
    if (paragraph) paragraph.textContent = text;
  }
  const entry = paragraphs.get(anchor.paragraph);
  const { paragraph, text } = entry;
  const { start, end } = displayRange(anchor, entry);
  const mark = node('mark', text.slice(start, end));
  paragraph.replaceChildren(text.slice(0, start), mark, text.slice(end));
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
    card.append(node('strong', comment.alias), node('blockquote', quote(comment)), node('p', comment.body));
    if (paragraphs.get(comment.paragraph)?.paragraph) {
      card.append(jump);
    } else {
      const source = node('small', '이전 읽기 자료에 남긴 댓글');
      source.className = 'muted';
      card.append(source);
    }
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


