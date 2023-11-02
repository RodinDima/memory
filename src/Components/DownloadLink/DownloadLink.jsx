import React from "react";

function DownloadLink() {

  const filePath = "./src/1.doc";

  return (
    <div>
      <a
        href={filePath}
        type="application/msword"
        download
        onError={(e) => console.error("Помилка завантаження файлу:", e)}
      >
        Завантажити файл
      </a>
    </div>
  );
}

export default DownloadLink;
