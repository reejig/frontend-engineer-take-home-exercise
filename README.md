## Introduction

Thanks for your interest in working at Reejig! As part of our interview process, we’d like you to complete this short assessment. This test will allow us to gain some insight as to how you go about solving problems while building user interfaces.

Please aim to spend no more than 90 minutes to 2 hours on this test. If you haven’t quite wrapped up everything by the 2 hour mark, it’s quite ok to submit what you’ve done.

If we schedule a follow up technical interview, we will use your test as a basis for some further discussions. We may also ask you to make some small changes.

## Project Information

- This project is set up using Vue 3 with Typescript as this is the frontend stack we use. If you have more experience using another framework then please remove Vue and set up the framework of your choice.
- In the `src/consts/` folder is a `apiURL.ts` file. This file contains the URL for the endpoint you will need to request data from. The data is an array of talent profiles in the folowing format

```
  {
    avatar: string,
    firstName: string,
    lastName: string,
    yearsExperience: number,
    skills: string[],
    skillsMatch: number,
  }
```

- Feel free to use any additional libraries you might need.
- Feel free to use a component library or CSS framework.
- We don’t expect pixel perfection, but please pay attention to details such as consistent alignment and spacing.

## Requirements

- Display user profiles in a list view. Including

  - The users avatar image
  - The talent name as full name
  - Years of experience
  - List of skills as tags
  - Show skills match as a percentage

- Using a text input, it should be possible to filter the list of profiles by last name.
- It should be possible to sort the list by the skills match (both ascending and descending).
- It should be possible to reset both the filter and sort with a reset button.
- It should be possible to remove an individual profile.

**For this test sorting, filtering and removing a profile only needs work on the UI. There is no need to persist the changes on the front end or a back end.**

## Project setup

1. Fork this project
2. Clone the project to your local dev environment
3. Run `npm install`
4. Run `npm run dev`

Please get in touch if you have any problems with the set up.

## Submission

Please email your contact at Reejig the link to your github repository containing your exercise.
