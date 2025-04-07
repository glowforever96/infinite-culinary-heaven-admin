"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import * as styles from "./topic-form.css";
import useUploadTopic from "@/hooks/useUploadTopic";
import Input from "../input";

export default function TopicForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const topicNameRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useUploadTopic();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setSelectedFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleClickUploadBox = () => {
    fileInputRef.current?.click();
  };

  const handleResetImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    fileInputRef.current?.click();
    setImagePreview(null);
    setSelectedFile(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!topicNameRef.current?.value || !selectedFile) {
      return;
    }
    mutate({
      name: topicNameRef.current.value,
      file: selectedFile,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>재료 등록 하기</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="topic" className={styles.label}>
          재료 이름
        </label>
        <Input
          type="text"
          id="topic"
          ref={topicNameRef}
          placeholder="재료 이름을 입력해주세요."
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>이미지 등록</label>
        {!imagePreview ? (
          <div className={styles.uploadBox} onClick={handleClickUploadBox}>
            +
          </div>
        ) : (
          <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
            <Image
              className={styles.previewImage}
              src={imagePreview}
              alt="img 미리보기"
              width={200}
              height={200}
            />
            <button onClick={handleResetImage} className={styles.resetButton}>
              재업로드
            </button>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChangeFile}
          className={styles.hiddenInput}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        등록
      </button>
    </form>
  );
}
