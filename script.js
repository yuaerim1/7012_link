// 초기 기본 데이터 세팅
const defaultData = [
    {
        category: "애들 정보",
        description: "매번 게시글 찾기 귀찮아서 모음",
        links: [
            {
                title: "계좌", isModal: true, content:
                    "은서 KB국민은행 53910201199845.\n 지오 KB국민은행 81560204196297\n 애림 우리은행 1002-756-503283\n지현 kB국민 752602-04-260688\n은수 신한 110-541-029299\n나영 토스뱅크 1001-1754-9930\n주현 토스뱅크 1000-3283-0543"
            }
        ]
    },
    {
        category: "브이로그",
        description: "브이로그 링크에얌",
        links: [
            { title: "유튜브", url: "https://youtube.com/playlist?list=PL0RyZjqXGxTpHYS2zLU9FTENt0t6b-3dm&si=hSVfTf78NIIc9uIg" },
            { title: "드라이브", url: "https://drive.google.com/drive/folders/16OhekYJT2lTXpGXLQKvrDCXXn9wvvOWf?usp=share_link" },
        ]
    },
    {
        category: "여행",
        description: "여행용 스프레드 시트들",
        links: [
            { title: "오사카", url: "https://docs.google.com/spreadsheets/d/1qSuIJsuYybQDhK9MfGkD7zqtLKXFd5DL8iG2CjvB23s/edit?usp=sharing" },
            { title: "상하이", url: "https://docs.google.com/spreadsheets/d/1PZesBOuNcrcyK9xAWAn6SEADN4UM8EU2HrybP356IRY/edit?usp=sharing" },
            { title: "도쿄", url: "https://docs.google.com/spreadsheets/d/1d118F7COuSr13IU4XsDYkUAVIGNqP8F2S2xqv90LVl4/edit?usp=drivesdk" },
            { title: "부산", url: "https://docs.google.com/document/d/1JS3De903YNjgYbNGUnzYdzsQ1GkVgzwJYZK5eDh2MGI/edit" },
        ]
    },

    {
        category: "총사",
        description: "공지에 있던 총사 관련 링크 긁어옴 ",
        links: [
            { title: "로오히 속성별 설정", url: "https://docs.google.com/document/d/1laWi6eHIxYdnKHgZTTStR8SA5SlJegBOV3PlanUw-ys/edit?usp=sharing" },
            { title: "현판 글", url: "https://wonderful-eye-78e.notion.site/31a087ed2ef9446e947a77b97e736b5f?pvs=4" },
            { title: "은수가 짜던 현판 설정", url: "https://docs.google.com/document/d/1E-Sp2snAIF4GZbmn-KzOr6pLchmHctQEauOoOf4196I/edit?usp=drivesdk" },
            { title: "아이돌 총사 설정", url: "https://docs.google.com/document/d/1A0Gt9G46QtfVaZnebV_EXfhJnMkhfskfCAMU1mNiZDM/edit?usp=sharing" }

        ]
    },

    {
        category: "총사 커뮤니티글",
        description: "총사커뮤니티글들",
        links: [
            { title: "커뮤니티(2021)", url: "https://www.evernote.com/shard/s324/sh/0d1d7ad7-ed20-49a1-9b7d-7ac7fece8fc6/484516420b116cb16fda71833a953e6a" },
            { title: "커뮤니티(2022~2024)", url: "https://www.evernote.com/shard/s324/sh/1e8120a9-6997-dbea-f17b-a4851a0e6e86/496ec54ee31bb29e1eea5a52a2f6327e" },
            { title: "커뮤니티(2025)", url: "https://share.evernote.com/note/cdcccaec-1b65-49a6-bc9a-262decafa11d" },
            { title: "커뮤니티(하이큐1)", url: "https://www.evernote.com/shard/s324/sh/0d1d7ad7-ed20-49a1-9b7d-7ac7fece8fc6/484516420b116cb16fda71833a953e6a" },
            { title: "커뮤니티(하이큐2)", url: "https://www.evernote.com/shard/s324/sh/0d1d7ad7-ed20-49a1-9b7d-7ac7fece8fc6/484516420b116cb16fda71833a953e6a" },
            { title: "커뮤니티(하이큐3)", url: "https://www.evernote.com/shard/s324/sh/0d1d7ad7-ed20-49a1-9b7d-7ac7fece8fc6/484516420b116cb16fda71833a953e6a" },
            { title: "커뮤니티(앙스타)", url: "https://www.evernote.com/shard/s324/sh/0d1d7ad7-ed20-49a1-9b7d-7ac7fece8fc6/484516420b116cb16fda71833a953e6a" },

        ]
    },

    {
        category: "기타",
        description: "뭔진 모르겠는데 문서가 파져있길래 넣음",
        links: [
            { title: "버킷리스트", url: "https://docs.google.com/document/d/1Ziwx_mjKPJD6j5M-f2A4dNgQlYtU54qFIPRnkSNjsL4/edit?usp=sharing" },
        ]
    }
];

// 로컬 스토리지 키
const STORAGE_KEY = 'linkhub_data';

// 상태 (데이터)
let appData = [];

// DOM 요소
const linksContainer = document.getElementById('links-container');

// 정보 모달 DOM 요소
const infoModal = document.getElementById('info-modal');
const infoCloseBtn = document.getElementById('info-close-btn');
const infoModalTitle = document.getElementById('info-modal-title');
const infoModalBody = document.getElementById('info-modal-body');

// 초기화 함수
function init() {
    loadData();
    render();
    setupEventListeners();
}

// 데이터 불러오기 (코드 우선)
function loadData() {
    appData = JSON.parse(JSON.stringify(defaultData));
}

// 데이터 저장하기
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

// 렌더링 (화면에 그리기)
function render() {
    linksContainer.innerHTML = ''; // 초기화

    appData.forEach((item, index) => {
        // details (토글) 생성
        const details = document.createElement('details');

        // summary (제목)
        const summary = document.createElement('summary');
        summary.textContent = item.category;

        // 토글 내용 컨테이너
        const contentDiv = document.createElement('div');
        contentDiv.className = 'category-content';

        // 설명글
        if (item.description) {
            const desc = document.createElement('p');
            desc.className = 'category-desc';
            desc.textContent = item.description;
            contentDiv.appendChild(desc);
        }

        // 링크 목록
        const linkList = document.createElement('div');
        linkList.className = 'link-list';

        item.links.forEach(link => {
            if (link.isModal || link.content) {
                // 모달로 열리는 버튼 생성
                const linkBtn = document.createElement('button');
                linkBtn.className = 'link-btn';
                linkBtn.style.width = '100%';
                linkBtn.style.cursor = 'pointer';
                linkBtn.textContent = link.title;
                linkBtn.addEventListener('click', () => {
                    openInfoModal(link.title, link.content, link);
                });
                linkList.appendChild(linkBtn);
            } else {
                // 일반 링크(a 태그) 생성
                const linkBtn = document.createElement('a');
                linkBtn.className = 'link-btn';
                linkBtn.href = link.url;
                linkBtn.target = '_blank';
                linkBtn.rel = 'noopener noreferrer';
                linkBtn.textContent = link.title;
                linkList.appendChild(linkBtn);
            }
        });

        contentDiv.appendChild(linkList);
        details.appendChild(summary);
        details.appendChild(contentDiv);

        linksContainer.appendChild(details);
    });
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 정보 모달 닫기 로직
    infoCloseBtn.addEventListener('click', () => {
        infoModal.classList.add('hidden');
    });

    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.add('hidden');
        }
    });

}

let currentActiveLink = null;

// 정보 모달 열기 함수
function openInfoModal(title, content, linkObj) {
    currentActiveLink = linkObj;
    infoModalTitle.textContent = title;
    // contentEditable 사용 시 innerText로 줄바꿈 유지
    infoModalBody.innerText = content;
    infoModal.classList.remove('hidden');
}

// 앱 실행
init();
