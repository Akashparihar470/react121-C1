import styles from "./CandidateCard.module.css";

function CandidateCard({img,name,company,salary,title}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" src={img}/>
      <div>
        <div>Name:{name}</div>
        <div>Title: {title} & Company Name:{company}</div>
      </div>
      <div>${salary}Salary</div>
    </div>
  );
}

export default CandidateCard;
