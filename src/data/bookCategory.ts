interface ICategoryItem {
  categoryId: number;
  categoryTitle: string;
  href: string;
}

const categoryListData: ICategoryItem[] = [
  {
    categoryId: 1,
    categoryTitle: "프론트엔드",
    href: "/category/1",
  },
  {
    categoryId: 2,
    categoryTitle: "교양",
    href: "/category/2",
  },
  {
    categoryId: 3,
    categoryTitle: "벡엔드",
    href: "/category/3",
  },
  {
    categoryId: 4,
    categoryTitle: "모바일",
    href: "/category/4",
  },
  {
    categoryId: 5,
    categoryTitle: "컴퓨터공학",
    href: "/category/5",
  },
];

export default categoryListData;
