const quotes = [
    {
      quote: "너의 나태함을 슬럼프라 착각하지 마라.",
    },
    {
      quote: "네가 지금 편한 이유는 내리막 길을 걷고 있기 때문이다.",
    },
    {
      quote:
        "현재의 삶에 만족하며 평생을 살아갈 것인가, 아니면 잠깐의 고통을 이겨낸 뒤 새로운 삶을 맞이할 것인가",
    },
    {
      quote: "평범하게 살고 싶지 않은데, 왜 평범하게 노력하는가?",
    },
    {
      quote: "나에게는 아직 꿈을 이루기 위한 충분한 시간이 있다.",
    },
    {
      quote: "후회하기 싫으면 그렇게 살지 말고, 그렇게 살 거면 후회하지 말아라.",
    },
    {
      quote:
        "원한다면 용기를 내어라, 떨어질까 무서워하지 마라, 아무것도 하지 않는 것보다 낫다.",
    },
  ];
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todayQuote.quote;
  author.innerText = "taehyeki";
  setInterval(() => {
    const quote = document.querySelector("#quote span:first-child");
    const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todayQuote.quote;
  }, 7000);