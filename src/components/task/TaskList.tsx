import { Box } from "@chakra-ui/react";
import { useState } from "react";

export const TaskList = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Box>
      {!isEdit ? (
        <Heading as="h3" onClick={handleClick}>
          {cardTitleValue || defaultTitle}
        </Heading>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder={defaultTitle}
            value={cardTitleValue}
            type="text"
            maxLength={inputMaxLength}
            onChange={handleChange}
            onBlur={handleBlur}
            width="100%"
            autoFocus
          />
        </form>
      )}
    </Box>
  );
}
