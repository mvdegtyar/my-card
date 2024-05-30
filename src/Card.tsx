import { useState } from "react";

const Card = () => {
  const [value, setValue] = useState<string>('123');
  return (
    <div>
      My card
            <input value={value}></input>
    </div>
  )
}

export default Card;