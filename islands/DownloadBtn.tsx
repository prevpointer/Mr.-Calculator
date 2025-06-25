const OutPutDownloadButtton = ({
  calculateOutput,
}: {
  calculateOutput: string;
}) => {
  const file = new Blob([calculateOutput], { type: "text/plain" });
  return (
    <button class="btn" style={{backgroundColor:"#fff",width:"80px",cursor:"pointer"}}>
      <a
        download="output.txt"
        target={"_blank"}
        rel="noreferrer"
        href={URL.createObjectURL(file)}
      ><img src="/assets/download.svg" alt="Download" /></a>
    </button>
  );
};

export default OutPutDownloadButtton;
