import React from "react";
import Card from "./components/Card.jsx";
const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$28/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCJpAHzn91VMfwirwAbAmV-ONO02UjmCj2w&s",
      companyName: "Apple",
      datePosted: "8 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45/hr",
      location: "Bengaluru, India",
    },
    {
      id: 3,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxaeYKwcmrtdCDVBsn9maZMXxYpJIcfoajw&s",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$35/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      companyName: "Meta",
      datePosted: "12 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hr",
      location: "Remote, India",
    },
    {
      id: 5,
      brandLogo:
        "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
      companyName: "Netflix",
      datePosted: "6 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Remote, India",
    },
    {
      id: 6,
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "9 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$40/hr",
      location: "Noida, India",
    },
    {
      id: 7,
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Pune, India",
    },
    {
      id: 8,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTsEbEc9W4KLOFJi16maxjlDgTLIVi2Qc5Q&s",
      companyName: "Adobe",
      datePosted: "7 days ago",
      post: "UX Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$38/hr",
      location: "Bengaluru, India",
    },
    {
      id: 9,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNjLD3tqq6RdgsW8Y55pgSHn-pU6avpc4BQ&s",
      companyName: "NVIDIA",
      datePosted: "11 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      id: 10,
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
      companyName: "IBM",
      datePosted: "4 days ago",
      post: "Java Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$22/hr",
      location: "Chennai, India",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black p-8 flex gap-12.5 flex-wrap ">
      {jobOpenings.map((elem) => {
        return (
          <Card
            brandLogo={elem.brandLogo}
            companyName={elem.companyName}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
