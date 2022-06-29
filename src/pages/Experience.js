import React from "react";
import { VerticalTimeline, VerticalTimelineElement,} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import School from '@material-ui/icons/School';
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 September - 2022 October"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Concordia University, Montreal, Quebec
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 May - 2021 August"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern of Software Developer - Genetec, Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montreal, Quebec
          </h4>
          <p> Developed 7 data ETL packages based on Microsoft SQL Server Integration Services (SSIS).</p>
        </VerticalTimelineElement>

      


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
