import { connect } from "react-redux";
import { loadData } from '@/redux/actions/jobList';
import JobList from '@/components/JobList';

const Index = (props) => {
  const {
    jobs,
    loading,
  } = props;

  return (
    <div>
      <h1>Next.js sample with Express.js</h1>
      {loading ? 'Loading...' : <JobList jobs={jobs} />}
    </div>
  );
};

Index.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;

  const { jobList } = store.getState();

  if (jobList &&jobList.jobs && jobList.jobs.length === 0) {
    store.dispatch(loadData());
  }

  return { isServer };
};

const mapStateToProps = state => {
  const { jobList = {} } = state;

  return {
    loading: jobList.loading,
    jobs: jobList.jobs,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
