import React from 'react'

function Adding() {
    const adding=():number => {
        const a:number = 1
        const b:number = 2
        return a + b
    }
  return (
    <div>
        count : {adding()}
    </div>
  )
}

export default Adding