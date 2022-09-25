import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineBarChart,
  AiOutlineFileAdd,
  AiOutlineReconciliation,
  AiOutlineAppstoreAdd,
  AiOutlineWallet,
  AiOutlineSetting,
  AiOutlineLock,
  AiOutlineMoneyCollect,
  AiOutlineCreditCard,
  AiOutlineSmile,
  AiOutlineShopping,
} from "react-icons/ai";
export const BANNER_IMG = [
  {
    id: 1,
    url: "/banner3_dvpiag.jpg",
  },
  {
    id: 2,
    url: "/banner_2_ydcxwj.jpg",
  },
  {
    id: 3,
    url: "/banner4_wxcsnj.jpg",
  },
];

export const HIGHLIGHT = [
  {
    id: 1,
    url: "/Rectangle1_dsozo8.png",
    colGrid: "",
    card: {
      title: "Exclusive Shoes",
      des: "PRICE 20% OFF",
      voucher: "DISCOUNT CODE - VATR3920 ",
    },
  },
  {
    id: 2,
    url: "/Rectangle2_hmsivn.png",
    colGrid: "col-start-2 col-end-4",
    card: {
      title: "Exquisite Styles & Collections",
      des: "PRICE 20% OFF",
      voucher: "DISCOUNT CODE - VATR3920  ",
    },
  },
  {
    id: 3,
    url: "/Rectangle3_zpp4id.png",
    colGrid: "col-start-1 col-end-3",
    card: {
      title: "New Arrivals",
      des: "PRICE 20% OFF",
      voucher: "DISCOUNT CODE - VATR3920  ",
    },
  },
  {
    id: 4,
    url: "/Rectangle4_hekw4s.png",
    colGrid: "",
    card: {
      title: "Exclusive Items",
      des: "PRICE 20% OFF",
      voucher: "DISCOUNT CODE - VATR3920  ",
    },
  },
];

export const LIST_PROFILE = [
  {
    title: "Store",
    to: "/",
  },
  {
    title: "Account",
    to: "/",
  },
  {
    title: "Wish List",
    to: "/",
  },
  {
    title: "Basket",
    to: "/",
  },
];

export const FOOTER_LIST = {
  Company: [
    {
      title: "About Laura's Closet ",
      to: "/",
    },
    {
      title: "Social Responsibility ",
      to: "/",
    },
    {
      title: "Affiliate",
      to: "/",
    },
    {
      title: "Fashion Blogger",
      to: "/",
    },
  ],
  Help: [
    {
      title: "Shipping Info",
      to: "/",
    },
    {
      title: "Returns",
      to: "/",
    },
    {
      title: "How to Order",
      to: "/",
    },
    {
      title: "How to Track",
      to: "/",
    },
    {
      title: "Size Chart",
      to: "/",
    },
  ],
  Customer: [
    {
      title: "Contact Us",
      to: "/",
    },
    {
      title: "Payment",
      to: "/",
    },
    {
      title: "Bonus Point",
      to: "/",
    },
    {
      title: "Notices",
      to: "/",
    },
  ],
};

export const LIST_ICON = {
  Socials: [
    {
      id: 1,
      src: "/Vector.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 2,
      src: "/Vector2.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 3,
      src: "/Vector3.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 4,
      src: "/Vector4.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 5,
      src: "/Vector5.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
  ],
  Platforms: [
    {
      id: 1,
      src: "/pla1.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 2,
      src: "/pla2.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
  ],
  Payment: [
    {
      id: 1,
      src: "/pay1.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 2,
      src: "/pay2.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 3,
      src: "/pay3.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 4,
      src: "/pay4.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 5,
      src: "/pay5.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 9,
      src: "/pay9.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 10,
      src: "/pay10.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 11,
      src: "/pay11.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 12,
      src: "/pay12.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 13,
      src: "/pay13.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
    {
      id: 14,
      src: "/pay14.png",
      to: "https://www.facebook.com/profile.php?id=100003191908789",
    },
  ],
};

export const LIST_SIDEBAR = [
  {
    title: "Dashboard",
    to: "/manage/dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    title: "User",
    to: "/manage/user",
    icon: <AiOutlineUser />,
    subMenu: [
      {
        title: "List User",
        to: "/manage/newuser",
        icon: <AiOutlineUserAdd />,
      },
      {
        title: "Add New User",
        to: "/manage/newuser",
        icon: <AiOutlineUserAdd />,
      },
    ],
  },
  {
    title: "Category",
    to: "/manage/category",
    icon: <AiOutlineDashboard />,
    subMenu: [
      {
        title: "List Category",
        to: "/manage/category",
        icon: <AiOutlineBarChart />,
      },
      {
        title: "Add New Category",
        to: "/manage/addcategory",
        icon: <AiOutlineFileAdd />,
      },
    ],
  },
  {
    title: "Products",
    to: "/manage/product",
    icon: <AiOutlineReconciliation />,
    subMenu: [
      {
        title: "List product",
        to: "/manage/product",
        icon: <AiOutlineBarChart />,
      },
      {
        title: "Add New Product",
        to: "manage/newproduct",
        icon: <AiOutlineAppstoreAdd />,
      },
    ],
  },
];

export const LIST_PROFILE_MENU = [
  {
    title: "Profile",
    to: "/",
    icon: <AiOutlineUser />,
  },
  {
    title: "My Wallet",
    to: "/",
    icon: <AiOutlineWallet />,
  },
  {
    title: "Manage",
    to: "/manage/dashboard",
    icon: <AiOutlineSetting />,
  },
  {
    title: "Lock screen",
    to: "/",
    icon: <AiOutlineLock />,
  },
];

export const CARD_ADMIN = [
  {
    title: "Revenue",
    cost: "$18,925",
    icon: <AiOutlineMoneyCollect />,
    color: "green",
  },
  {
    title: "Expense",
    cost: "$11,024",
    icon: <AiOutlineCreditCard />,
    color: "red",
  },
  {
    title: "Happy Clients",
    cost: "8,925",
    icon: <AiOutlineSmile />,
    color: "yellow",
  },
  {
    title: "New Store Open",
    cost: "18,925",
    icon: <AiOutlineShopping />,
    color: "sky",
  },
];

export const DATA_CHAR = {
  CHAR_TODAY: [
    {
      name: "Ha Tinh",
      expense: 4000,
      revenue: 2400,
    },
    {
      name: "Vinh",
      expense: 3000,
      revenue: 1398,
    },
    {
      name: "Ha Noi",
      expense: 2000,
      revenue: 9800,
    },
    {
      name: "Da Nang",
      expense: 2780,
      revenue: 3908,
    },
    {
      name: "Ho Chi Minh",
      expense: 1890,
      revenue: 4800,
    },
    {
      name: "Can Tho",
      expense: 2390,
      revenue: 3800,
    },
    {
      name: "Hai Phong",
      expense: 3490,
      revenue: 4300,
    },
  ],
  CHAR_WEEK: [
    {
      name: "Ha Tinh",
      expense: 9000,
      revenue: 4400,
    },
    {
      name: "Vinh",
      expense: 6000,
      revenue: 2398,
    },
    {
      name: "Ha Noi",
      expense: 8000,
      revenue: 2800,
    },
    {
      name: "Da Nang",
      expense: 6780,
      revenue: 7908,
    },
    {
      name: "Ho Chi Minh",
      expense: 4890,
      revenue: 3800,
    },
    {
      name: "Can Tho",
      expense: 7390,
      revenue: 2800,
    },
    {
      name: "Hai Phong",
      expense: 9490,
      revenue: 6300,
    },
  ],
  CHAR_MONTH: [
    {
      name: "Ha Tinh",
      expense: 10000,
      revenue: 2900,
    },
    {
      name: "Vinh",
      expense: 9000,
      revenue: 4398,
    },
    {
      name: "Ha Noi",
      expense: 8000,
      revenue: 6800,
    },
    {
      name: "Da Nang",
      expense: 8780,
      revenue: 4908,
    },
    {
      name: "Ho Chi Minh",
      expense: 8890,
      revenue: 3800,
    },
    {
      name: "Can Tho",
      expense: 9390,
      revenue: 6800,
    },
    {
      name: "Hai Phong",
      expense: 7490,
      revenue: 5300,
    },
  ],
  CHAR_YEAR: [
    {
      name: "Ha Tinh",
      expense: 7000,
      revenue: 5400,
    },
    {
      name: "Vinh",
      expense: 7000,
      revenue: 3398,
    },
    {
      name: "Ha Noi",
      expense: 7000,
      revenue: 3800,
    },
    {
      name: "Da Nang",
      expense: 6780,
      revenue: 3908,
    },
    {
      name: "Ho Chi Minh",
      expense: 6890,
      revenue: 2800,
    },
    {
      name: "Can Tho",
      expense: 6390,
      revenue: 3800,
    },
    {
      name: "Hai Phong",
      expense: 7490,
      revenue: 4300,
    },
  ],
};

export const imgbbAPI = `https://api.imgbb.com/1/upload?key=55707bd44a68a131b540327e9b99a0d8`;
