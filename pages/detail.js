import React from "react";
import { connect } from "react-redux";
import Link from 'next/link';
import { loadData } from '@/redux/actions/jobDetail';

const Detail = (props) => {
  const {job: {
    id,
    name,
    avatar,
    createdAt,
  },
  loading,
  } = props;

  return loading ? 'Loading...' : (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img width={50} src={avatar} alt={avatar} />
      <div style={{ margin: '0 8px' }}>
        <div>
          ID:
          {' '}
          {id}
        </div>
        <div>{name}</div>
        <div>
          Created at:
          {' '}
          {createdAt}
        </div>
        <div>
          <Link href='/'>
            <a>
              Back to list
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Detail.getInitialProps = (props) => {
  const { store, isServer, query: { id } } = props.ctx;

    const { jobDetail } = store.getState();

    if (jobDetail.job && Object.keys(jobDetail.job).length === 0 && id) {
      store.dispatch(loadData(id));
    }

    return { isServer };
};

const mapStateToProps = state => {
  const { jobDetail = {} } = state;

  return {
    loading: jobDetail.loading,
    job: jobDetail.job,
  };
};

export default connect(mapStateToProps)(Detail);
