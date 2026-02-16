"use client";

import React from "react";
import {
  Monitor,
  Utensils,
  Plane,
  Palette,
  Gamepad2,
  Shirt,
  Home,
  Dumbbell,
  Sparkles,
} from "lucide-react";

// 1. استخراج دقیق رنگ‌ها از تصویر ارسالی شما (تصویر ۱)
const categories = [
  {
    id: 1,
    title: "سفر و گردشگری",
    icon: <Plane size={22} />,
    bg: "#144816", // سبز تیره جنگلی
    accent: "#4ADE80", // سبز روشن نئونی
  },
  {
    id: 2,
    title: "آشپزی و تغذیه",
    icon: <Utensils size={22} />,
    bg: "#450F1E", // زرشکی تیره
    accent: "#F472B6", // صورتی روشن
  },
  {
    id: 3,
    title: "فرهنگ و تاریخ",
    icon: <Sparkles size={22} />,
    bg: "#2E2345", // بنفش تیره
    accent: "#A78BFA", // یاسی روشن
  },
  {
    id: 4,
    title: "هنر و کتاب",
    icon: <Palette size={22} />,
    bg: "#083358", // سرمه‌ای تیره
    accent: "#22D3EE", // آبی فیروزه‌ای روشن
  },
  {
    id: 5,
    title: "بازی و سرگرمی",
    icon: <Gamepad2 size={22} />,
    bg: "#4A2207", // قهوه‌ای تیره
    accent: "#FB923C", // نارنجی روشن
  },
  {
    id: 6,
    title: "تکنولوژی",
    icon: <Monitor size={22} />,
    bg: "#424408", // زیتونی تیره
    accent: "#FACC15", // زرد طلایی
  },
  {
    id: 7,
    title: "مد و سبک زندگی",
    icon: <Shirt size={22} />,
    bg: "#1E264F", // آبی نفتی تیره
    accent: "#60A5FA", // آبی آسمانی
  },
  {
    id: 8,
    title: "خانه و دکوراسیون",
    icon: <Home size={22} />,
    bg: "#4F0E18", // قرمز تیره
    accent: "#FB7185", // قرمز روشن (Rose)
  },
  {
    id: 9,
    title: "ورزش",
    icon: <Dumbbell size={22} />,
    bg: "#422F08", // برنز تیره
    accent: "#FBBF24", // کهربایی
  },
];

const CategoryItem = ({ title, icon, bg, accent }) => {
  return (
    <button
      className="group relative flex items-center rounded-full py-1.5 pl-5 pr-1.5 transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      style={{ backgroundColor: bg }}
    >
      {/* Icon Container - Squircle Shape & Bright Color */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-2xl text-gray-900 shadow-sm"
        style={{ backgroundColor: accent }}
      >
        {/* آیکون با رنگ تیره برای کنتراست بهتر روی رنگ‌های روشن */}
        <span className="opacity-80 transition-opacity group-hover:opacity-100">
          {icon}
        </span>
      </div>

      {/* Text - White & Bold */}
      <span className="mr-3 whitespace-nowrap text-sm font-bold text-white">
        {title}
      </span>
    </button>
  );
};

const CategorySection = () => {
  return (
    <section className="container mx-auto mt-16 px-4">
      {/* کانتینر برای چینش وسط و فاصله‌دهی */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            title={cat.title}
            icon={cat.icon}
            bg={cat.bg}
            accent={cat.accent}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
