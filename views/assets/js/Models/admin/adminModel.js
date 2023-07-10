class AdminModel {

    handleAddWork(data) {
        const formData = new FormData();
        formData.append("project_name", data.projectName);
        formData.append("project_description", data.projectDescription);
        formData.append("project_tags", data.projectTags)
        formData.append("project_link", data.projectLink)
        formData.append("image", data.projectBannerImg)
        formData.append("image", data.projectModalImg)


        fetch("/add-work", {
            method: "Post",
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                if (res.succeeded) {
                    alert("Uqurlu")
                }
            })
            .catch(err => alert("sekil yoxdur cox gumn"))
    }
    changePageDataHandler(social_links, sectionHeaders, footerHeaders, texts) {
        const formData = {
            social_links,
            sectionHeaders,
            footerHeaders,
            texts
        }


        fetch("/change-page-data", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => (res.json()))
            .then(res => alert(res.message))
            .catch(err => alert(err))
    }


}