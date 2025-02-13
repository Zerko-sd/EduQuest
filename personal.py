import streamlit as st
from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# Initialize the LLM using your HuggingFaceHub model
llm = HuggingFaceHub(
    repo_id="deepseek-ai/DeepSeek-R1",  # Model identifier on the Hub
    huggingfacehub_api_token="YourAPIKey",  # Replace with your token
    model_kwargs={
        "max_new_tokens": 4096,    # Increased maximum tokens for longer output
        "min_new_tokens": 256,     # Ensures a minimum length for the generated content
        "do_sample": True,         # Enable sampling for creative and varied output
        "temperature": 0.7,        # Moderate temperature for balanced creativity
        "repetition_penalty": 1.03,
    }
)

# Define the prompt template
prompt_template = PromptTemplate(
    input_variables=[
        "learning_style",
        "preferred_format",
        "proficiency_level",
        "topic_interest",
        "topic",
        "user_pace",
        "current_progress",
        "learning_duration"
    ],
    template="""
You are a highly knowledgeable and engaging educational assistant specializing in creating personalized, in-depth learning content. Using the detailed user profile below, generate comprehensive learning material that explains the topic thoroughly and provides actionable suggestions for further learning.

User Profile:
- **Learning Style:** {learning_style}
- **Preferred Content Format:** {preferred_format}
- **Proficiency Level:** {proficiency_level}
- **Topics of Interest:** {topic_interest}
- **Current Topic:** {topic}
- **User Pace:** {user_pace}
- **Current Progress:** {current_progress}
- **Learning Duration (hrs per week):** {learning_duration}

Content Requirements:
1. **Introduction:**  
   Provide a brief overview of the topic, explaining its relevance and importance. Connect the topic to the user's interests and learning goals.

2. **Detailed Explanation:**  
   Deliver an in-depth explanation of "{topic}", covering:
   - Key concepts and underlying principles.
   - Step-by-step descriptions of core ideas.
   - Definitions and context necessary for understanding.
   - Illustrative examples, analogies, or case studies to clarify complex points.
   - Visual aids or suggestions for diagrams (if applicable).

3. **Interactive Elements:**  
   Propose interactive activities such as reflective questions, practice exercises, or mini-quizzes to reinforce understanding and encourage engagement.

4. **Key Takeaways:**  
   Summarize the most important concepts and skills learned. Present these in a clear, bulleted list to highlight actionable insights.

5. **Next Steps & Further Learning:**  
   Recommend actionable next steps tailored to the user's profile, including:
   - Additional resources (books, articles, videos, or online courses).
   - Related topics for deeper exploration.
   - Practical projects or exercises to apply the newly acquired knowledge.
   - Study tips and strategies that align with the user's learning pace and available study time (approximately {learning_duration} hrs per week).

6. **Conclusion:**  
   Conclude with a motivational summary that encourages continued learning and improvement.

Ensure your response is well-structured with clear headings for each section, uses bullet points or numbered lists where appropriate, and is written in a friendly yet informative tone.
"""
)

# Create the LLM chain with the defined LLM and prompt
llm_chain = LLMChain(llm=llm, prompt=prompt_template)

def generate_learning_content(user_data):
    """Generates learning content based on user data."""
    return llm_chain.run(user_data)

def main():
    st.title("Personalized Learning Content Generator")

    # Collect user input
    learning_style = st.selectbox("Learning Style", ["visual", "auditory", "kinesthetic"])
    preferred_format = st.selectbox("Preferred Content Format", ["video", "text", "interactive"])
    proficiency_level = st.selectbox("Proficiency Level", ["beginner", "intermediate", "advanced"])
    topic_interest = st.text_input("Topics of Interest", value="Machine Learning")
    topic = st.text_input("Current Topic", value="Python programming")
    user_pace = st.selectbox("User Pace", ["steady", "fast", "slow"])
    current_progress = st.text_input("Current Progress", value="has basic programming knowledge")
    learning_duration = st.number_input("Learning Duration (hrs per week)", min_value=1, max_value=40, value=5)

    if st.button("Generate Content"):
        user_data = {
            "learning_style": learning_style,
            "preferred_format": preferred_format,
            "proficiency_level": proficiency_level,
            "topic_interest": topic_interest,
            "topic": topic,
            "user_pace": user_pace,
            "current_progress": current_progress,
            "learning_duration": str(learning_duration)
        }
        with st.spinner("Generating personalized learning content..."):
            content = generate_learning_content(user_data)
            st.success("Content generated successfully!")
            st.write(content)

if __name__ == "__main__":
    main()