# Track
track calender and performance.
each fuction will be a serverless function that is takes data process it and stores it in the datatbase

## Language

**Python**

## Requirements 

- Have a calender with events "Optional: integrate with google & microsoft calender"
- Accept calender events from school files i.e json etc
- CRUD those event  
- See examine queries and use them to track retentiom

## Algorithms and Data Structures

### Algorithms

- **Event Parsing**: Parsing JSON files to extract event data.
- **Conflict Detection**: Checking for overlapping events to prevent scheduling conflicts.
- **Data Synchronization**: Syncing events with Google and Microsoft calendars.

### Data Structures

- **Event Object**: A class representing an individual calendar event with attributes like `title`, `date`, `time`, `location`, and `description`.
- **Event List**: A list data structure to store multiple Event Objects for easy access and manipulation.
- **JSON Handling**: Utilizing Python's `json` module to read and write event data.


# Learning KPIs

- Pass Rates
    - Metric Unit: Three Percentages
    - Algorithm: Percentage of rights over all based on quizes, percentages of rights over written/answerd, school report(optional)

- Skill Mastery
    - Metric Units: 1-5[Horrible, Bad, Moderate, Good, Great]
    - Each Skill and subject should be rated
    - Algorithm: based on passrates get subject, and based on percentage of each type of question they get wrong or right rate
    
- Social Engagement_(Promotes sharing i.e growth
    - Metric Units:
        - Shares (WhatsApp, instagram)
        - Shared quiz participations (host and invited)
    - Algorithm: store each share in a database and segment weekly and monthly

- Retention
    - Metric Units: 1-5[Horrible, Bad, Moderate, Good, Great]
    - Algotithm: Based on how long score, this will be done based on what the student was tought and the asked later
                 therefore we should identify weather a question is first time seen or not, a field/attribute of each question
                 based on this field/attribute look at time gap between and how the student performs on each reiteration.

    - Data structure: 
    ```py

    question: {
        type->enum: LONG_ANSWER
        text->string: Null
        time_stamp->datetime: 14-JUL
        skill->enum[]: [ORAL, SHORT_TERM_MEMORY, LISTENING]
        subject->enum: ENGLISH
        grade->int: 8
    }
   ```
- Completion
    - Metric Unit: percentage
    - Algorithm: percentage of quizes completed

- Attendance
    - Metric Unit:1-5 rating
    - Algotithm: percentile of days, and calender session/events
