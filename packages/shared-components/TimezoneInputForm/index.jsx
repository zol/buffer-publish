import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  InputAutocomplete,
  Text,
} from '@bufferapp/components';

const editTimezoneStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginBottom: '0.5rem',
};

const textWrapperStyle = {
  display: 'flex',
  marginBottom: '0.5rem',
};

const formStyle = {
  display: 'flex',
  flexGrow: 1,
};

const chooseTimezoneStyle = {
  display: 'flex',
  flexGrow: 1,
};

const fieldStyle = {
  width: '100%',
};

const TimezoneInputForm = ({
  items,
  handleSubmit,
  sortItems,
}) => (
  <form>
    <div style={editTimezoneStyle}>
      <div style={textWrapperStyle}>
        <Text
          size={'small'}
          color={'black'}
          weight={'thin'}
        >
          Timezone
        </Text>
      </div>
      <div style={formStyle}>
        <div style={chooseTimezoneStyle}>
          <div style={fieldStyle}>
            <Field
              name={'timezone'}
              component={InputAutocomplete}
              items={items}
              onSelect={handleSubmit}
              sortItems={sortItems}
            />
          </div>
        </div>
      </div>
    </div>
  </form>
  );

TimezoneInputForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired,
  sortItems: PropTypes.func.isRequired,
};

TimezoneInputForm.defaultProps = {
};

export default reduxForm({
  form: 'timezone-input',
})(TimezoneInputForm);
