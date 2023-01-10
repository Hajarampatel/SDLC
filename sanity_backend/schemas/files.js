export default {
  name: "pdf",
  type: "document",
  title: "PDF",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "studentid",
      type: "string",
      title: "Student_ID",
    },
    {
      name: "instid",
      type: "string",
      title: "Institute_ID",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
    },
    {
      name: "certificateId",
      type: "string",
      title: "Certificate Id",
    },
    {
      name: "document",
      title: "Document",
      type: "file",
      options: {
        accept: "image/*,.pdf",
      },
    },
  ],
};
