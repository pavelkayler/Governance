import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/context/Context.jsx";

const ProposalManager = ({ proposalId }) => {
  const { cancel } = useContext(Context);

  const handleCancel = async (e) => {
    e.preventDefault();
    await cancel(proposalId);
  };
  return (
    <div className="d-flex  flex-row flex-wrap justify-content-center">
      <Button onClick={handleCancel} className="btn-secondary">
        Отменить
      </Button>
    </div>
  );
};

export { ProposalManager };
