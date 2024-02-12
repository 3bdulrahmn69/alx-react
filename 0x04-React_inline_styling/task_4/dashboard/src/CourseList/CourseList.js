import React from 'react';
import CourseListRow from './CourseListRow';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';
import { css, StyleSheet } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table)}>
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

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '90%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
    marginBottom: '15em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default CourseList;
