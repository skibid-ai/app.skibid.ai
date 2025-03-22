export type Log = {
  id: string;
  body: {
    user: "agent" | "dev";
    type: "message" | "action";
    content_msg: string;
  };
  createdAt: string;
};
