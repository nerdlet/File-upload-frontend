# File Upload
simple SPA to handle file uploads.
## Goals

 -  Only  registered  users  can  upload  files.
 -  The  users  must  be  able  to  search  for  files  by  name,  mime  type  or  fields  in  the  file_metadata.
 -  Only  a  staff  user  or  a  superuser  can  delete  files.
 -  Only  a  staff  user  or  a  superuser  can  create  new  users
 -  Needs  to  validate  the  file  metadata  before  upload,  using  this  json  schema:


        {

	        "$schema":  "https://json-schema.org/draft/2019-09/schema",

	        "$id":  "http://example.com/example.json",

	        "type":  "object",

	        "title":  "file  metadata  example",

	        "required":  [

	            "Gain",

	            "Battery",

	            "Datetime",

	            "FileSize"

	        ],

	        "properties":  {

	            "Gain":  {

	                "type":  "string",

	                "title":  "Gain",

	                "examples":  [

	                    "medium"

	                ]

	            },

	            "Battery":  {

	                "type":  "string",

	                "title":  "Battery",

	                "examples":  [

	                    "4.4V"

	                ]

	            },

	            "Datetime":  {

	                "type":  "string",

	                 "pattern":  "^[0-9]{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])  (0?[0-9]|1[0-9]|2[0123]):(0?[0-9]|[12345][0-9]):(0?[0-9]|[12345][0-9]).([0-9]{6})-([0-9]{4})$",

	                "title":  "file  Datetime",

	                "examples":  [

	                    "2021-08-28  16:10:00.000000-0600"

	                ]

	            },

	            "FileSize":  {

	                "type":  "integer",

	                "title":  "The  FileSize  Schema",

	                "examples":  [

	                    5767168

	                ]

	            }

	        },

	        "examples":  [{

	            "Gain":  "medium",

	            "Battery":  "4.4V",

	            "Datetime":  "2021-08-28  16:10:00.000000-0600",

	            "FileSize":  5767168

	        }]

	    }


## Development

This project uses [yarn](https://yarnpkg.com/lang/en/) as a dependancy. See [the documentation](https://yarnpkg.com/lang/en/) to set it up on your machine.

Run the following command to get started

```shell
    git clone https://github.com/nerdlet/File-upload-frontend.git
    cd file-upload-frontend
    yarn install
    yarn start
```
---

## License

GNU General Public License v3.0

sensors.AFRICA is a citizen-science focused project by Code for Africa that seeks to address data gaps by providing low cost sensors, which people can use to measure and monitor the quality of the air, water, and environment in their communities. This web app seeks to be the public portal through which most users would discover and explore the data and intiative.

Copyright (C) 2018 Code for Africa

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
