# Examine

## Language

**Python**

## Requirements 

- Create **Question answer pairs** based on a scope
- **NB** It is important to ask quetions in the format that the teacher/examiner will ask
- We could ask questions in the format of a teacher/examiner once or twice a week or during exams, the a few of our targeted questions
- The pairs should be storable and shareable i.e in a relational database, vector database... any database or file

## Question answer types

Multiple Choice Questions (MCQs):

- True/False Questions
- Matching Questions
- Fill-in-the-Blank Questions
- Short Answer Questions
- Essay Questions
- Problem-Solving Questions
- Case Study Questions
- Diagram/Labeling Questions
- Sequence/Ordering Questions
- Discussion Questions
- Practical/Application Questions

## Algorithms and Data Structure

Algorithms

- Question Parsing: Parsing input to create various types of questions.
- Data Storage: Efficiently storing and retrieving question-answer pairs from the database or file.
- Validation: Ensuring the validity of the questions and answers before storage.
- Language Processing: Utilizing LangChain for natural language processing and question generation.

Data Structures

- Question Object: A class representing an individual question with attributes like type, question_text, options (for MCQs), answer, explanation, and difficulty.
- Question List: A list data structure to store multiple Question Objects for easy access and manipulation.
- Database Models: Using SQLAlchemy models or equivalent to define how questions and answers are stored in a relational database.
- JSON Handling: Utilizing Python's json module to read and write question-answer data to files.
