import { Soup, Sparkles, HeartHandshake, Sprout } from "lucide-react";

export const BANK_CONFIG = {
  BANK_ID: "MB", // [PLACEHOLDER - MB is Military Bank]
  ACCOUNT_NO: "100736047", // [PLACEHOLDER - Replace with real account number]
  ACCOUNT_NAME: "DAO BINH AN", // [PLACEHOLDER - Replace with real name]
  TEMPLATE: "compact2",
};

export const NAVBAR = {
  logo: "Nuôi An 🌱",
  cta: "Rót vốn ngay",
};

export const HERO = {
  badge: "✨ Playground - just a playful project",
  heading1: "Nuôi An — Dự án tiếp sức",
  heading2: "một tâm hồn",
  subheading:
    "An là một dự án chạy bằng cơm đang được vận hành với mục tiêu làm những thứ hay ho trên đời. Nếu bạn thấy dự án này hữu ích và có tiềm năng phát triển hoặc đơn giản là thấy An tử tế — hãy mạnh dạn đầu tư cho An một tô cơm :D",
  ctaPrimary: "Đầu tư ngay 💛",
  ctaSecondary: "Xem thêm đã",
};

export const ABOUT = {
  title: "Nuôi An là gì?",
  description: [
    "Chào các nhà đầu tư thiên thần! 'Nuôi An' là một dự án cá nhân mang tính chất 'gọi vốn chống đói'. Cái tên nói lên tất cả: Bạn nuôi An, An cảm ơn.",
    "Dự án này hoạt động hoàn toàn phi lợi nhuận (bởi vì tiền vào là người nhận tiêu hết). An sẽ rất vui khi được bạn 'rót vốn'. Toàn bộ ngân sách sẽ được An giải ngân vào đồ ăn vặt, vé đi show, mua Monster nạp năng lượng chạy deadline, và rất cũng có thể là... bao bạn đi ăn hehe.",
    "Nếu bạn thấy vui, hoặc tình cờ đang dư dả, hãy 'rót vốn' vào dự án này. Không ép buộc, không áp KPI, lợi tức duy nhất bạn nhận được là sự cảm kích từ một chiếc bụng no và niềm vui của An.",
  ],
  cardTitle: "An là ai?",
  cardSubtitle:
    "Một nhân tố bí ẩn nào đó, đang ngồi chờ ting ting từ bạn và tiếp tục tỏ ra là mình có ích.",
};

export const FEATURES = [
  {
    icon: Soup,
    title: "Mua cơm cho An",
    description:
      "Năng lượng để duy trì sự sống và giữ cho server An không bị sập.",
    classname: "md:col-span-1",
    imagepath: "/12003/46977/738dc18d9f436d0a5502d5c55af70195.png",
  },
  {
    icon: Sparkles,
    title: "Tài trợ vé đi Show",
    description:
      "Năng suất của An tỉ lệ thuận với mức độ thỏa mãn nhu cầu giải trí. Chút kinh phí đi show âm nhạc, chơi game, hay hang out cùng gang t sẽ giúp An reset não và x3 tốc độ xử lý công việc.",
    classname: "md:col-span-2",
    imagepath: "/12003/46965/a779714a878714c7120ee6aa6338e079.png",
  },
  {
    icon: HeartHandshake,
    title: "Vì bạn là người tốt",
    description:
      "An sẽ giúp bạn tích đức thông qua những hành động tiêu tiền tốt đẹp. Đơn giản vì trao đi là nhận lại (nụ cười của An).",
    classname: "md:col-span-2",
    imagepath: "/12003/46976/1b2b4923e7e1fb0eaf994c31d08b5171.png",
  },
  {
    icon: Sprout,
    title: "Đơn giản vì bạn giàu",
    description:
      "Một trong những cơ hội để bạn tiêu tiền đúng chỗ. Hãy để tiền của bạn làm việc có ích!",
    classname: "md:col-span-1",
    imagepath: "/12003/46979/e6d1145ed8200e23c1b033be302f5334.png",
  },
];

export const MARQUEE_ITEMS = [
  "👾 Buy An a 'Monster'",
  "🌱 Nuôi An",
  "💛 Support creativity",
  "😋 Cơm ngon mỗi ngày",
  "🎵 Góp tiền đi Show",
  "🍜 Tặng An tô mỳ",
  "✨ Một miếng khi đói",
  "🙏 Thankiu Sô mớt",
  "🚀 Keep on building",
  "😶‍🌫️ Dream comes true",
  "🐧 chucmungbandabilua",
];

export const NAV_LINKS = [
  { label: "Về Nuôi An", href: "#about" },
  { label: "Lý do nên đầu tư", href: "#why" },
  { label: "Hỏi xoáy đáp xoay", href: "#faq" },
];

export const WHY = {
  title: "Tại sao nên đầu tư?",
  subtitle: "Những lý do vô cùng thuyết phục (hoặc không).",
};

// export const STATS = [
//   { value: 128, label: "người ủng hộ", suffix: "+" },
//   { value: 452, label: "cà phê đã nhận", suffix: " ☕" },
//   { value: 99, label: "lời chúc tốt đẹp", suffix: "%" },
// ];

export const DONATE_SECTION = {
  title: "Rót vốn cho An ngay hôm nay",
  inputLabel: "Nhập số tiền bạn muốn đầu tư (VNĐ)",
  inputPlaceholder: "vd: 50000",
  noteLabel: "Lời nhắn (Optional)",
  notePlaceholder: "Cầm lấy và tiêu hết trong hôm nay cho tôi!",
  ctaButton: "Tạo mã QR",
  helperText: "Quét mã bằng app ngân hàng bất kỳ — hoặc MoMo, ZaloPay",
  defaultText: "Nhập số tiền để tạo mã QR nhé!",
  subtitle: "Bắt đầu tích đức.",
  loadingText: "Đang tạo mã...",
  successText: "Thankiu Sô mớt 🎉",
  amountLabel: "Số tiền",
  bankLabel: "Ngân hàng",
  notePrefix: "ND:",
  currency: "đ",
};

export const LETTER = {
  content:
    "Gửi bạn, một người quen (hoặc lạ) đầy tử tế và cũng là một nhà đầu tư thiên thần (tiềm năng),\n\n Mình tin rằng sự kết nối đưa chúng ta đến đây là một điều rất đẹp đẽ. Cảm ơn bạn đã nán lại xem qua cáo của dự án 'Nuôi An'. Đây không hẳn là một lời kêu cứu, chỉ là một lời mời vui vẻ. \n\nDù bạn chọn rót vốn bằng hiện kim hay bằng những lời cổ vũ tinh thần thầm lặng, mình đều rất trân trọng. Chúc bạn luôn rực rỡ, bình an, chân cứng đá mềm đi qua những thử thách và có thật nhiều 'cơm ngon' trong hành trình của mình.",
  signature: "— Bình An 🌱",
};

export const FAQ_DATA = [
  {
    question: "Tiền ủng hộ sẽ dùng để làm gì?",
    answer:
      "Phần lớn ngân sách sẽ được giải ngân ngay lập tức (có thể là vào đồ ăn), phần còn lại sẽ được An cất ví để dành.",
  },
  {
    question: "Tôi có nhận được gì không?",
    answer:
      "Tích đức online. Ngoài ra, bạn sẽ nhận được niềm vui thanh cao khi biết mình vừa cứu đói một người. Mình không hứa sẽ chia cổ tức, nhưng hứa sẽ không mua đồ bậy bạ.",
  },
  {
    question: "An là ai vậy?",
    answer:
      "Mình là một người tham vọng, hay mộng mơ, sở hữu rất nhiều dự án (sắp ra mắt), ý tưởng. Hiện tại đang rất sẵn lòng nhận được sự tài trợ của bạn.",
  },
  {
    question: "Tôi có thể đầu tư bao nhiêu?",
    answer: "Bao nhiêu cũng bú!",
  },
  {
    question: "Nuôi An có hợp pháp không?",
    answer:
      "Hoàn toàn hợp pháp! Công an sẽ không bắt bạn vì tội tích đức online đâu. Bạn cứ yên tâm công tác nhé.",
  },
];

export const FAQ_SECTION = {
  title: "Câu hỏi thường gặp",
  subtitle: "Cẩm nang giải ngố về Nuôi An.",
};

export const FOOTER = {
  tagline: "just a playful project",
  copyright: `/${new Date().getFullYear()}.`,
  links: [
    { label: "GitHub", href: "https://github.com/b1nhan" },
    { label: "Twitter", href: "https://facebook.com/b1nhan.neh" },
    { label: "Blog", href: "#" },
  ],
  signature: "@b1nhan",
};

export const FOOTER_BANNER = {
  title: "Cảm ơn bạn đã ghé thăm 💛",
  body: "Dù bạn có donate hay không — việc bạn đến đây đã là điều tuyệt vời rồi.",
  sub: "Tất nhiên, nếu có donate thì mình sẽ cảm ơn to hơn một chút.",
  cta: "Rót vốn ngay",
};
