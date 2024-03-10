import { ReactElement, useState } from "react";
import { useParams } from "react-router";
import "../css/ContentInvite.scss";
import { useClipboard, Button, Flex, Input } from "@chakra-ui/react";
import "dotenv/config";

function ContentInvite(): ReactElement {
  const [inputText, setInputText] = useState<any>(null);
  const { hasCopied, onCopy } = useClipboard(inputText);
  //const [shareWriteText, setshareWriteText] = useState(false);

  const { id } = useParams<{ id?: string }>();
  // const [inputValue, setInputValue] = useState(
  //   `http://localhost:3000/content/${id}`
  // );
  return (
    <>
      <div>
        <div className="inviteHeader">INVITE</div>
        <div className="sectionButton">
          <button
            className="read"
            onClick={() => {
              // console.log("read 버튼");
              setInputText(`${process.env.REACT_APP_CLIENT_URL}/content/${id}`);
            }}
          >
            공유
          </button>
          <button
            className="readWrite"
            onClick={() => {
              // console.log("readWrite 버튼");
              setInputText(`${process.env.REACT_APP_CLIENT_URL}/invite/${id}`);
            }}
          >
            작성 공유
          </button>
        </div>
      </div>
      <Flex mb={2}>
        <Input
          value={inputText}
          isReadOnly
          placeholder="공유버튼을 눌러 url을 넣어주세요"
        />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </>
  );
}
export default ContentInvite;

/* 토글 버튼 css */

/* <div className="buttonToggle">
          <input type="checkbox" id="check1" className="input" />
          <label htmlFor="check1" className="label">
            <span className="span">선택</span>
          </label>
        </div> */
