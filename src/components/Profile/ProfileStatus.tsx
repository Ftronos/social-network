import React, { useEffect, useState } from "react";

type props_type = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatusWithHooks: React.FC<props_type> = ({
  status,
  updateStatus,
  ...props
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [localStatus, setStatus] = useState<string>(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);

    updateStatus(localStatus);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{localStatus}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            type="text"
            value={localStatus}
            onBlur={deactivateEditMode}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
