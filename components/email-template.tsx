import type { Data } from "../interfaces";

export const EmailTemplate: React.FC<Readonly<Data>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1 style={{ fontSize: "20px" }}>
      {name.last} {name.first}様からのメッセージが届きました
    </h1>

    <p style={{ fontSize: "18px" }}>
      おはこんばんちは、アンドレスsann！
      <br />
      {email}から次のメッセージがとどきましたよん☆
      <br />「{message}」
      <br />
      以上。
      <br />
      じゃあねん〜♡
      <br />
      <br />
      Miku。
    </p>
  </div>
);
