import javascript_icon from "../assets/images/javascript-icon.png";
import swift_icon from "../assets/images/swift-icon.png";
import java_icon from "../assets/images/java-icon.png";
import cs_icon from "../assets/images/cs-icon.png";
import culture_icon from "../assets/images/book-image.png";

export interface IRecommendData {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  themeColor: string;

  recommendKeyword: Array<string>;
}

const recommendData: IRecommendData[] = [
  {
    id: 4,
    title: "컴퓨터공학/IT 💾",
    subTitle: "컴퓨터공학 관련 서적을 만나보세요.",
    image: cs_icon,
    themeColor: "#142139",
    recommendKeyword: ["Git", "OS", "네트워크", "데이터베이스", "RxJava"],
  },
  {
    id: 2,
    title: "모바일 📱",
    subTitle: "모바일 관련 서적을 만나보세요.",
    image: swift_icon,
    themeColor: "#ff9645",
    recommendKeyword: [
      "Swift",
      "오브젝티브-C",
      "안드로이드",
      "iOS",
      "React-native",
      "Xcode",
    ],
  },
  {
    id: 1,
    title: "프론트엔드 🖥",
    subTitle: "프론트엔드 관련 서적을 만나보세요.",
    image: javascript_icon,
    themeColor: "#373672",
    recommendKeyword: ["JavaScript", "HTML", "CSS", "React", "Vue"],
  },
  {
    id: 3,
    title: "백엔드 📟",
    subTitle: "백엔드 관련 서적을 만나보세요.",
    image: java_icon,
    themeColor: "#58CF92",
    recommendKeyword: ["Java", "스프링", "AWS", "JSP", "RxJava"],
  },
  {
    id: 5,
    title: "교양 📖",
    subTitle: "교양 관련 서적을 만나보세요.",
    image: culture_icon,
    themeColor: "#FFD592",
    recommendKeyword: ["미래", "직업", "디자인", "휴식", "열정"],
  },
];

export default recommendData;
