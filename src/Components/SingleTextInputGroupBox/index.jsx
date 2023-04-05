import React, { Fragment, useState, useEffect } from 'react';

const SingleTextInputGroupBox = (props) => {

  const finalResult = [];
  const { inputList } = props;

  const [inputRefList, setInputRefList] = useState([]);

  useEffect(() => {
    createRef(inputList);
  }, [])

  const createRef = (inputList) => {
    const refList = [];
    inputList.forEach((element) => {
      refList.push(React.createRef());
    })
    setInputRefList(refList)
  }

  const handleValueChange = (value, index) => {
    finalResult[index] = value;
    if (index !== inputList.length - 1 && value !== null) {
      inputRefList[index + 1].current.focus()
    }
    if (index === inputList.length - 1 && finalResult.length === inputList.length) {
      props.getValue(finalResult.join(''))
    }
  }

  return (
    <Fragment>
      <form action="" style={{ display: 'flex', flexDirection: 'row' }}>
        {inputList.map((element, index) =>
          <input type='text' style={{ width: '20px', marginRight: '5px', textAlign: 'center' }} onChange={(event) => handleValueChange(event.target.value, index)}
            placeholder={element}
            ref={inputRefList[index]}
          />

        )}
      </form>
    </Fragment>
  )
}
export default SingleTextInputGroupBox;