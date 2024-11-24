import React from 'react'
import {animals} from '../assets/AnimalsDb';
function AnimalTable(props) {
  return (
    <div>
        <table width={"100%"} border={1}>
            <thead>
                <tr >
                    <td width="100%">Animal Matching Game</td>
                </tr>
                <tr>
                    <td >Result</td>
                    <td>Animal Name</td>
                    <td>Select the Animal</td>
                </tr>
            </thead>
        </table>
    </div>
  )
}
export default AnimalTable