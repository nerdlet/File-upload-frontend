import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DropzoneArea } from "material-ui-dropzone";
import { Grid,TextField,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { UPLOAD_FILE_MUTATION } from '../../lib/mutations'


function FileUploader({disabled}) {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadFileMutation] = useMutation(UPLOAD_FILE_MUTATION, {
    context: {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  });


  const handleDrop = async (droppedFiles) => {
    setFiles([...files, ...droppedFiles]);
    const name = files[0].name;
    const mimeType = files[0].type;

    const operations = JSON.stringify({
      query: UPLOAD_FILE_MUTATION,
      variables: {
        name,
        mimeType,
        file: null,
      },
    });

    const map = JSON.stringify({
      "0": ["variables.file"],
    });

    const formData = new FormData();
    formData.append("operations", operations);
    formData.append("map", map);
    formData.append("0", files[0]);

    try {
      const response = await uploadFileMutation({
        variables: {
          name,
          mimeType,
          file: formData,
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = (file) => {
    const index = files.indexOf(file);
    if (index !== -1) {
      setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFiles = files.filter(
    (file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.size.toString().includes(searchQuery)
  );
  return (
    <div>
      <Grid style={{ padding: '2rem 0px' }}>
        <DropzoneArea
          filesLimit={1}
          maxFileSize={10485760}
          onDrop={handleDrop}
          onDelete={handleRemove}
          showPreviewsInDropzone={false}
          showPreviews={false}
          dropzoneText="Drag and drop a file here or click to select"
        />
      </Grid>
  

      <Grid style={{ padding: '1rem 0rem' }}>

      <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginBottom: "1rem" }}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">Size</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFiles.map((file) => (
                <TableRow key={file.name}>
                  <TableCell>{file.name}</TableCell>
                  <TableCell>{file.type} bytes</TableCell>
                  <TableCell align="right">{file.size} bytes</TableCell>
                  <TableCell align="right">
                    <IconButton disabled={disabled} onClick={() => handleRemove(file)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default FileUploader;
