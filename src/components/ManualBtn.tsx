"use client";
import React, { ReactNode, useState } from "react";
import Popup from "./Popup";

const PopupBtn = () => {
  const [openWin, setOpenWin] = useState(false);
  const description = (
    <>
      <ol className="text-sm sm:text-base list-decimal pl-4">
        <li>段落翻译：点击翻译按钮，自动将其他语言译成简体中文，中文译成英语</li>
        <li>单词释义：点击输入框或翻译结果中的任意单词，查看详细的英语释义</li>
      </ol>
      <p className="opacity-80 italic text-sm text-center pt-2">
        注：强烈建议手机将此网页添加到桌面使用；查询过的结果会被离线缓存，点击页面最下方的“清除缓存”即可清除
      </p>
    </>
  );

  const popup = () => {
    openWin ? setOpenWin(false) : setOpenWin(true);
  };

  return (
    <div className="relative w-full flex justify-center">
      <button
        title="how to use"
        type="button"
        className="opacity-80 underline hover:scale-105 active:scale-100"
        onClick={popup}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 296 296"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-slate-200 fill-none">
          <circle cx="148" cy="148" r="140" stroke="black" stroke-width="20" />
          <path
            d="M132.033 199.705V198.49C132.168 185.603 133.517 175.347 136.081 167.723C138.645 160.099 142.288 153.925 147.011 149.202C151.734 144.479 157.402 140.127 164.014 136.146C167.995 133.717 171.571 130.85 174.742 127.544C177.913 124.17 180.41 120.29 182.232 115.905C184.121 111.519 185.065 106.661 185.065 101.331C185.065 94.7187 183.513 88.9837 180.41 84.1257C177.306 79.2677 173.157 75.5231 167.961 72.8917C162.766 70.2603 156.997 68.9446 150.655 68.9446C145.122 68.9446 139.792 70.0916 134.664 72.3856C129.536 74.6797 125.252 78.2894 121.811 83.2148C118.37 88.1403 116.379 94.5838 115.839 102.545H90.3352C90.875 91.0753 93.8438 81.2582 99.2415 73.0941C104.707 64.93 111.892 58.6889 120.799 54.3707C129.772 50.0525 139.724 47.8935 150.655 47.8935C162.53 47.8935 172.853 50.255 181.624 54.978C190.463 59.701 197.278 66.1783 202.068 74.4098C206.926 82.6413 209.355 92.0199 209.355 102.545C209.355 109.967 208.208 116.681 205.914 122.686C203.688 128.691 200.449 134.055 196.198 138.778C192.015 143.501 186.955 147.684 181.017 151.327C175.08 155.038 170.323 158.952 166.747 163.067C163.171 167.116 160.573 171.94 158.954 177.54C157.335 183.14 156.457 190.124 156.322 198.49V199.705H132.033ZM144.987 259.619C139.994 259.619 135.71 257.831 132.134 254.255C128.558 250.679 126.77 246.395 126.77 241.402C126.77 236.409 128.558 232.125 132.134 228.549C135.71 224.973 139.994 223.185 144.987 223.185C149.98 223.185 154.265 224.973 157.841 228.549C161.417 232.125 163.205 236.409 163.205 241.402C163.205 244.708 162.361 247.744 160.674 250.511C159.055 253.277 156.862 255.504 154.096 257.19C151.397 258.81 148.361 259.619 144.987 259.619Z"
            fill="black"
          />
        </svg>
      </button>
      {openWin && <Popup text={description} setOpenWin={setOpenWin} />}
    </div>
  );
};

export default PopupBtn;