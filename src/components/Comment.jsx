/* eslint-disable react/no-unescaped-entities */
import TextExpander from "./TextExpander";

function Comment() {
  return (
    <div className="w-full max-w-[500px] bg-primary-800 rounded-xl p-6 flex flex-col gap-4">
      <div className="w-full flex items-center gap-3">
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
          <img
            className="w-full max-w-full object-cover"
            src="https://avatars.githubusercontent.com/u/121456353?v=4"
            alt="Azlan Ibrahim"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-display text-base font-medium text-secondary-50">Azlan Ibrahim</h3>
          <p className="font-display text-sm text-secondary-100">10 mins ago</p>
        </div>
      </div>
      <TextExpander maxWords={24} btnLabel="Read more">
        Remember, the key to mastering any new skill, especially in programming, is consistent practice and continuous
        learning. Don'post be afraid to make mistakes, as they are invaluable learning opportunities. Break down complex
        problems into smaller, manageable tasks, and tackle them one step at a time. Utilize available resources like
        documentation, forums, and tutorials to expand your knowledge. Collaborate with others, seek feedback, and stay
        curious. Most importantly, enjoy the journey and celebrate your progress, no matter how small. Persistence and
        patience will lead to success.
      </TextExpander>
    </div>
  );
}

export default Comment;
