import React  from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Todo.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';


const Todo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="app-container">
            <table>
              <thead>
                <tr>
                  <th>S.NO.</th>
                  <th>Task</th>
                  <th>Start</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody id="body_of_table">
                  <tr>
                      <td>1.</td>
                      <td>Task 1</td>
                      <td>20/10/2021 11:20AM</td>
                      <td><CheckCircleIcon style={{color:"green"}}/></td>
                  </tr>
                  <tr>
                      <td>2.</td>
                      <td>Task 2</td>
                      <td>20/10/2021 05:26PM</td>
                      <td><CheckCircleIcon style={{color:"red"}}/></td>
                  </tr>
                  <tr>
                      <td>3.</td>
                      <td>Task 3</td>
                      <td>22/10/2021 03:06AM</td>
                      <td><CheckCircleIcon style={{color:"red"}}/></td>
                  </tr>
                  <tr>
                      <td>4.</td>
                      <td>Task 4</td>
                      <td>24/10/2021 09:04AM</td>
                      <td><CheckCircleIcon style={{color:"red"}}/></td>
                  </tr>
                  <tr>
                      <td>5.</td>
                      <td>Task 5</td>
                      <td>25/10/2021 05:21AM</td>
                      <td><CheckCircleIcon style={{color:"red"}}/></td>
                  </tr>
              </tbody>
            </table>
                  <AddCircleSharpIcon id="icon_circle" style={{color:"#f7df40",fontSize:45}}/>
          </div>
        </Col>

        <Col>
         <form>
           
             <table>
                 <tbody id="body">
                
                     <tr>
                        <td id="new_task">New Task<CloseIcon id="cross"/></td>
                     </tr>
                     <tr>
                        <td id="date_td"> 
                        <input type="date" id="date"/>
                        </td>
                     </tr>
                     <tr>
                         <td id="textarea_td">
                         <textarea rows="20" cols="80" />
                         </td>
                     </tr>
                     <tr>
                         
                         <td id="td_button_id"><TextFormatIcon id="TextFormatIcon_id" style={{color:"black",fontSize:35}}/>
                         <AttachFileIcon id="attach" style={{color:"black",fontSize:30}}/>
                         <ToggleOnIcon  id="toggle" style={{color:"red",fontSize:40}}/>
                          <button id="button_create">Create</button></td>

                     </tr>

                     </tbody>
             </table>
         </form>
        </Col>
      </Row>
    </Container>
  );
};
export default Todo;
