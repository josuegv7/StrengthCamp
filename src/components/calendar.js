import React, {Component} from 'react';
import style from './calendar.css';



export default class Calendar extends Component {
  render() {
    return(
      <table className={style.table}>
  <thead>
    <tr>
      <th>Weekday</th>
      <th>Classes (AM)</th>
      <th>Women's Class</th>
      <th>Classes (PM)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>6:00 am / 7:00 am / 8:00 am</td>
      <td>9:00 am</td>
      <td>5:00 pm / 6:00 pm / 7:00 pm</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>6:00 am / 7:00 am / 8:00 am</td>
      <td>9:00 am</td>
      <td>5:00 pm / 6:00 pm / 7:00 pm</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td>6:00 am / 7:00 am / 8:00 am</td>
      <td>9:00 am</td>
      <td>5:00 pm / 6:00 pm / 7:00 pm</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>6:00 am / 7:00 am / 8:00 am</td>
      <td>9:00 am</td>
      <td>5:00 pm / 6:00 pm / 7:00 pm</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td>6:00 am / 7:00 am / 8:00 am</td>
      <td>9:00 am</td>
      <td>5:00 pm / 6:00 pm / 7:00 pm</td>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>8:00 am</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    );
  }
}
