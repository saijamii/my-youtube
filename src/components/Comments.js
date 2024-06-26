import React from "react";

const commentsData = [
  {
    name: "SJ",
    text: "Thats was Awsome Man !! ",
    replies: [],
  },
  {
    name: "SJ",
    text: "Thats was Awsome Man !! ",
    replies: [],
  },
  {
    name: "SJ",
    text: "Thats was Awsome Man !! ",
    replies: [
      {
        name: "SJ",
        text: "Thats was Awsome Man !! ",
        replies: [
          {
            name: "SJ",
            text: "Thats was Awsome Man !! ",
            replies: [],
          },
          {
            name: "SJ",
            text: "Thats was Awsome Man !! ",
            replies: [],
          },
          {
            name: "SJ",
            text: "Thats was Awsome Man !! ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "SJ",
    text: "Thats was Awsome Man !! ",
    replies: [],
  },
];
const CommentsList = ({ commnets }) => {
  return commnets?.map((record, index) => (
    <div key={record.id || index} >
      <Comment data={record} />
      <div className="ml-5 pl-5 border border-l-black ">
        <CommentsList commnets={record.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Comments = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentsList commnets={commentsData} />
    </div>
  );
};

export default Comments;
