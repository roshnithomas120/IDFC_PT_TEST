package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type Imposter struct {
	Stub []Stub `json:"stubs"`
}

type Stub struct {
	Predicates []Predicates `json:"predicates"`
	Responses  []Responses  `json:"responses"`
}

type Predicates struct {
	Equals struct {
		Method string `json:"method"`
		Path   string `json:"path"`
	} `json:"equals"`
}

type Responses struct {
	Is struct {
		Statuscode int         `json:"statusCode"`
		Body       interface{} `json:"body"`
	} `json:"is"`
}

type Customer struct {
	Name      string `json:"name"`
	Href      string `json:"href"`
	Kind      string `json:"kind"`
	Value     string `json:"value"`
	GroupName string `json:group_name`
}

func homePage(w http.ResponseWriter, r *http.Request) {
	customers := []Customer{
		{
			Name:      "primary_color_border",
			Href:      "/api/catalog/accounts/60073/account_preferences/primary_color_border",
			Kind:      "self_service#account_preference",
			Value:     "#476189",
			GroupName: "portal_customization",
		},
		{
			Name:      "secondary_color_border",
			Href:      "/api/catalog/accounts/60073/account_preferences/primary_color_border",
			Kind:      "self_service#account_preference",
			Value:     "#476189",
			GroupName: "portal_customization",
		},
		{
			Name:      "ternary_color_border",
			Href:      "/api/catalog/accounts/60073/account_preferences/primary_color_border",
			Kind:      "self_service#account_preference",
			Value:     "#476189",
			GroupName: "portal_customization",
		},
	}
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(customers)
	// fmt.Fprintf(w, "Hello!")
	fmt.Println("Endpoint Hit: Microservice 1")
}

func HandleRequests() {
	fmt.Println("Hello world")
	Path := "/api/internal/idp/v1/customer-profile"
	http.HandleFunc(Path, func(w http.ResponseWriter, r *http.Request) {
		Response := getResponse(Path)
		w.Header().Add("Content-Type", "application/json")
		json.NewEncoder(w).Encode(Response)
	})

	// http.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func getResponse(Path string) interface{} {
	content, err := ioutil.ReadFile("./microservice1/sample.json")
	if err != nil {
		log.Fatal(err)
	}
	imposter := Imposter{}
	err = json.Unmarshal(content, &imposter)
	if err != nil {
		log.Fatal(err)
	}
	for _, val := range imposter.Stub {
		for key, predicate := range val.Predicates {
			fmt.Println("Checking predicate", predicate.Equals.Path)
			if Path == predicate.Equals.Path {
				return val.Responses[key].Is.Body
			}
		}
	}
	return nil


}
func main() {
	HandleRequests()
}
