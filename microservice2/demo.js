// import fetch from "node-fetch";
import axios from "axios"

import nock from "nock";
import http from "http";

const host = 'mountebank1';
// const host='127.0.0.1';
const port = 5001; 

const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const requestListener = async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  const result = await getData()
  res.writeHead(200);
  res.end(result);
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

const getData = async () => {
  await mockGetData()

  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const result = await res.json()

  const res = await axios.get('http://mountebank1:5002/test');
  const result = res.data
  return JSON.stringify(result);

}

const mockGetData = async () => {
  nock('http://mountebank1:5002')
   .get('/test')
   .reply(200, 
    [
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#476189",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2014-07-31T19:29:36.513+00:00",
            "updated_at": "2014-07-31T19:29:36.513+00:00"
          }
        },
        {
          "name": "primary_color_border",
          "href": "/api/catalog/accounts/60073/account_preferences/primary_color_border",
          "kind": "self_service#account_preference",
          "value": "#0f4e07",
          "group_name": "portal_customization",
          "created_by": {
            "id": "12345",
            "name": "Madison Bumgarner",
            "email": "ace@rightscale.com"
          },
          "timestamps": {
            "created_at": "2015-04-08T04:24:25.499+00:00",
            "updated_at": "2015-04-08T04:24:25.499+00:00"
          }
        }
      ]
      
   );
};