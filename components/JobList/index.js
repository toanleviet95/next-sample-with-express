import React from 'react';
import Link from 'next/link';

const JobList = ({ jobs = [] }) => jobs.map(job => (
  <div style={{ display: 'flex', alignItems: 'center' }} key={`job_${job.id}`}>
    <img width={50} src={job.avatar} alt={job.avatar} />
    <div style={{ margin: '0 8px' }}>{job.name}</div>
    <Link href={`/jobs/${job.id}`}><a>(Detail)</a></Link>
  </div>
  )
);

export default JobList;
