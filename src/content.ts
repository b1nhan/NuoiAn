import { sign } from "crypto";
import { Soup, Coffee, HeartHandshake, Sprout } from "lucide-react";

export const BANK_CONFIG = {
  BANK_ID: "MB", // [PLACEHOLDER - MB is Military Bank]
  ACCOUNT_NO: "100736047", // [PLACEHOLDER - Replace with real account number]
  ACCOUNT_NAME: "DAO BINH AN", // [PLACEHOLDER - Replace with real name]
  TEMPLATE: "compact2",
};

export const NAVBAR = {
  logo: "Nuôi An 🌱",
  cta: "Ủng hộ ngay",
};

export const HERO = {
  badge: "✨ Một dự án nhỏ, ý nghĩa lớn",
  heading1: "Nuôi An — Dự án nuôi sống",
  heading2: "một con người",
  subheading:
    "An là một người đang cố gắng làm những thứ hay ho trên đời. Nếu bạn thấy An hữu ích — hoặc chỉ đơn giản là tử tế — hãy mua cho An một ly cà phê ☕",
  ctaPrimary: "Ủng hộ ngay 💛",
  ctaSecondary: "Tìm hiểu thêm",
};

export const ABOUT = {
  title: "Nuôi An là gì?",
  description: [
    "Chào bạn! Mình là An. Nuôi An là một dự án cá nhân mang tính 'vui là chính, cơm gạo là mười'. Cái tên này đơn giản là một lối chơi chữ: 'Nuôi' (nuôi nấng) + 'An' (tên mình).",
    "Thú thực, mình không bán khóa học, không bán sản phẩm, và cũng không gửi tin nhắn spam. Mình chỉ đang cố gắng xây dựng những thứ nhỏ bé nhưng tử tế cho thế giới này (hoặc ít nhất là cho mình).",
    "Nếu bạn cảm thấy những gì mình làm có chút giá trị, hoặc đơn giản là muốn thấy một con người được no bụng để tiếp tục gõ code, bạn có thể 'nuôi' mình bằng một ly cà phê. Không ép buộc, không áp lực, chỉ có lòng biết ơn vô hạn và những lời chúc tốt lành nhất gửi đến bạn.",
  ],
};

export const FEATURES = [
  {
    icon: Soup,
    title: "Mua cơm cho An",
    description:
      "Năng lượng vàng để An tiếp tục duy trì sự sống và sự tỉnh táo.",
    classname: "md:col-span-1",
  },
  {
    icon: Coffee,
    title: "1 Coffee = 1 Giờ Code",
    description:
      "Tăng tốc độ xử lý bug và ra mắt các tính năng mới nhanh hơn 300%.",
    classname: "md:col-span-2",
  },
  {
    icon: HeartHandshake,
    title: "Vì bạn là người tốt",
    description:
      "Đơn giản vì trao đi là nhận lại (ít nhất là nhận lại nụ cười của An).",
    classname: "md:col-span-2",
  },
  {
    icon: Sprout,
    title: "Nuôi dưỡng sáng tạo",
    description:
      "Giúp mình có điều kiện tìm tòi và hiện thực hóa những ý tưởng 'điên rồ'.",
    classname: "md:col-span-1",
  },
];

export const MARQUEE_ITEMS = [
  "☕ Buy An a coffee",
  "🌱 Nuôi An",
  "💛 Support creativity",
  "🍜 Cơm ngon mỗi ngày",
  "✨ Một miếng khi đói",
  "🙏 Cảm ơn bạn rất nhiều",
  "🚀 Keep on building",
];

export const STATS = [
  { value: 128, label: "người ủng hộ", suffix: "+" },
  { value: 452, label: "cà phê đã nhận", suffix: " ☕" },
  { value: 99, label: "lời chúc tốt đẹp", suffix: "%" },
];

export const DONATE_SECTION = {
  title: "Ủng hộ An ngay hôm nay",
  inputLabel: "Nhập số tiền bạn muốn ủng hộ (VNĐ)",
  inputPlaceholder: "vd: 50000",
  noteLabel: "Lời nhắn (không bắt buộc)",
  notePlaceholder: "Cố lên nhé An!",
  ctaButton: "Tạo mã QR 💛",
  helperText: "Quét mã bằng app ngân hàng bất kỳ — hoặc MoMo, ZaloPay",
  defaultText: "Nhập số tiền để tạo mã QR nhé!",
};

export const LETTER = {
  content:
    "Gửi bạn, một người lạ (hoặc quen) đầy tử tế.\n\nMình tin rằng trên đời này vẫn còn rất nhiều sự kết nối đẹp đẽ dù chúng ta chưa từng gặp mặt. 'Nuôi An' không phải là một lời kêu cứu, mà là một lời mời gọi đồng hành. Cảm ơn bạn vì đã ghé qua, đã đọc, và đã dành tâm sức để hiểu về một dự án nhỏ bé này.\n\nDù bạn chọn ủng hộ bằng vật chất hay chỉ đơn giản là một lời cổ vũ thầm lặng, mình đều cảm kích như nhau. Chúc bạn luôn bình an, rực rỡ và có thật nhiều 'cơm ngon' trong hành trình của chính mình.",
  signature: "— An 🌱",
};

export const FAQ_DATA = [
  {
    question: "Tiền ủng hộ sẽ dùng để làm gì?",
    answer:
      "Phần lớn sẽ dùng để mua cơm, cà phê và thanh toán các hóa đơn dịch vụ (hosting, API...) giúp mình duy trì các dự án nhỏ. Một phần nhỏ sẽ được để dành để nâng cấp thiết bị làm việc.",
  },
  {
    question: "Tôi có nhận được gì không?",
    answer:
      "Ngoài lòng biết ơn sâu sắc và lời chúc vạn sự như ý, bạn sẽ nhận được niềm vui vì đã giúp một người trẻ bớt lo toan hơn trong cuộc sống. Thỉnh thoảng mình sẽ gửi cập nhật về những gì mình làm được nhờ sự hỗ trợ của bạn.",
  },
  {
    question: "An là ai vậy?",
    answer:
      "Mình là một người bình thường thích làm những thứ không bình thường. Một coder, một mộng mơ gia, và hiện tại là một người đang cần bạn 'nuôi' (theo đúng nghĩa đen của trang web này).",
  },
  {
    question: "Tôi có thể ủng hộ bao nhiêu?",
    answer:
      "Bao nhiêu cũng quý! 10k, 20k cũng đủ để mình thấy được khích lệ rất nhiều. Không có khoản đóng góp nào là quá nhỏ khi nó đi kèm với sự tử tế.",
  },
  {
    question: "Nuôi An có hợp pháp không? 😄",
    answer:
      "Hoàn toàn hợp pháp! Đây là một hình thức donation/crowdfunding cá nhân tự nguyện. Mình không cam kết trả lại lợi nhuận, nhưng cam kết sẽ không lãng phí niềm tin của bạn.",
  },
];

export const FOOTER = {
  tagline: "nuoian.com · Made with 💛 and a lot of ☕",
  copyright: `© ${new Date().getFullYear()} Nuôi An. All rights reserved.`,
  links: [
    { label: "GitHub", href: "https://github.com/b1nhan" },
    { label: "Twitter", href: "https://facebook.com/b1nhan.neh" },
    { label: "Blog", href: "#" },
  ],
  signature: "@b1nhan",
};
