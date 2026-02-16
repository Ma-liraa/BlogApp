"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8">
        {/* Title */}
        <div className="space-y-2 text-center">
          <h1 className="text-lg font-bold text-[#1E2A44] sm:text-xl">
            ورود به حساب
          </h1>
          <p className="text-xs text-gray-400">اطلاعات خود را وارد کنید</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <RHFTextField
            name="email"
            label="ایمیل"
            register={register}
            dir="ltr"
            errors={errors}
          />

          <RHFTextField
            name="password"
            label="رمز عبور"
            register={register}
            type="password"
            dir="ltr"
            errors={errors}
          />

          {/* Submit */}
          <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <SpinnerMini />
                در حال ورود...
              </div>
            ) : (
              "ورود"
            )}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-px flex-1 bg-gray-100"></div>
            <span className="text-[10px] text-gray-400">حساب ندارید؟</span>
            <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          {/* Signup Chip */}
          <Link href="/signup" className="block">
            <div className="w-full rounded-2xl bg-[#F3F6FB] py-3 text-center text-xs text-[#5E72E4] transition hover:bg-[#E9EDFF] sm:text-sm">
              ثبت‌نام
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
