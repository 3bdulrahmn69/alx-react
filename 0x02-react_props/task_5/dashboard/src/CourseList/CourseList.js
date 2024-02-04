import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          and
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : (
          listCourses.map((Course) => (
            <CourseListRow
              isHeader={false}
              key={Course.id}
              textFirstCell={Course.name}
              textSecondCell={Course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
