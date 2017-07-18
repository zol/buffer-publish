import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  InputTime,
  InputWeekday,
  Text,
} from '@bufferapp/components';

const editScheduleStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginBottom: '0.5rem',
};

const textWrapperStyle = {
  display: 'flex',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
};

const chooseDaysAndTimeStyle = {
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
};

const inputTimeWrapper = {
  marginLeft: '0.5rem',
  marginRight: '1rem',
};

const addPostingTimeStyle = {
  display: 'flex',
  flexGrow: 1,
};

const PostingTimeForm = ({
  handleSubmit,
  submitting,
  twentyfourHourTime,
}) => (
  <form>
    <div style={editScheduleStyle}>
      <div style={textWrapperStyle}>
        <Text
          size={'small'}
          color={'black'}
          weight={'thin'}
        >
          Add a new posting time
        </Text>
      </div>
      <div style={formStyle}>
        <div style={chooseDaysAndTimeStyle}>
          <div>
            <Field
              name={'day'}
              component={InputWeekday}
            />
          </div>
          <Text
            size={'small'}
            color={'black'}
            weight={'thin'}
          >
            Choose time
          </Text>
          <div style={inputTimeWrapper}>
            <Field
              name={'time'}
              component={InputTime}
              select24Hours={twentyfourHourTime}
            />
          </div>
          <div style={addPostingTimeStyle}>
            <Button
              onClick={handleSubmit}
              disabled={submitting}
            >
              Add Posting Time
            </Button>
          </div>
        </div>
      </div>
    </div>
  </form>
  );

PostingTimeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  twentyfourHourTime: PropTypes.bool.isRequired,
};

PostingTimeForm.defaultProps = {
  twentyfourHourTime: false,
};

export default reduxForm({
  form: 'posting-time',
})(PostingTimeForm);
