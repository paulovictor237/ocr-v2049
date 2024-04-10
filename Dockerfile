# =========================================
# 🔥 BUILD IMAGE
# =========================================
FROM python:3.10-slim

# GLOBAL ARGMENTS
ENV LAMBDA_TASK_ROOT="/var/task"
ENV ENVIRONMENT_MODE="production"

# WORKDIR
WORKDIR ${LAMBDA_TASK_ROOT}

# COPY FILES
COPY src ./

# INSTALL PIPENV
COPY Pipfile Pipfile.lock ./
RUN pip install pipenv
RUN pipenv requirements > ./requirements.txt

# INSTALL PIP PACKGES
RUN pip install --upgrade pip
RUN pip install awslambdaric
RUN pip install -r requirements.txt

# SYSTEM DEPENDENCIES
RUN apt update
RUN apt install -y poppler-utils
RUN apt install -y ffmpeg libsm6 libxext6
RUN apt install -y tesseract-ocr tesseract-ocr-por

# EXPOSE PORT
EXPOSE 8080 5000

# ENTRYPOINT SCRIPT FOR LAMBDA
CMD ["bash", "lambda.sh"]
