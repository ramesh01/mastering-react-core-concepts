import { useRef } from "react";
import FormField from './FormField';

/**
 * In React, forwarding refs allows a component to pass down a ref from its parent to a child component,
 *  allowing the parent to access the child's DOM node or React component instance.
 */

const ForwardRef = () => {
  const inputRef: any = useRef(null);
  const handleClick = () => {
    inputRef?.current.focus();
  }
  return(
    <form>
      <FormField label="Enter card number" ref={inputRef} isRequired={true} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  )
}
export default ForwardRef;