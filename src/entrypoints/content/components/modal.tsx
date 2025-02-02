export const Modal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-1000 overflow-y-auto">
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" onClick={onClose} />
    <div className="flex min-h-full items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl mx-auto p-6 transform transition-all">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">title</h3>
        <div className="mt-4 mb-6">
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tenetur nobis commodi. Provident facilis quod distinctio nisi. Sit maiores corrupti vel nulla provident error itaque deleniti ratione ipsum dolorum ea amet maxime, doloremque quas nam repudiandae voluptates reiciendis illum voluptatibus magni, optio non autem soluta! Adipisci maxime dolore officia consectetur sunt dicta perspiciatis, voluptatibus itaque cumque. Nobis, temporibus minus excepturi odio necessitatibus eligendi ipsam quod itaque minima nam odit quidem totam veritatis, quo possimus tempora recusandae laudantium! Necessitatibus odit repellat harum itaque veniam explicabo consequuntur, debitis quisquam, deleniti eveniet voluptas natus deserunt iusto a tempore recusandae commodi minus nobis officia eos neque, eius placeat quo blanditiis. Nulla veritatis ipsam ex architecto voluptates, non rerum omnis natus? Veniam asperiores nisi magni distinctio. Culpa illum voluptas tempore doloremque voluptatem, optio laborum rerum praesentium saepe, qui alias et quisquam. Eveniet doloremque quia corrupti facilis? Nulla quaerat debitis veritatis tempore enim. Obcaecati assumenda ratione impedit dolores quidem. Voluptatibus perferendis, mollitia modi obcaecati veniam reiciendis sapiente voluptates assumenda, eligendi soluta voluptatem ratione ad necessitatibus cumque quae consectetur aut quibusdam saepe nisi quis ea. Facilis incidunt at aperiam deleniti quia omnis mollitia sequi. Impedit quam exercitationem, minima iure, eius sint consequuntur sed, voluptatem amet ex natus tempora quae! Quas dolore quisquam praesentium totam molestiae ipsa ea. Accusantium aliquam deleniti porro vero sequi maxime recusandae veniam ipsum modi ratione natus quis vitae eligendi, qui, tempore asperiores molestiae facere aliquid temporibus omnis impedit aut odit eius! Fuga eius quam, quibusdam nesciunt est, recusandae optio aut nobis rem officia sunt sequi labore possimus inventore consequatur non reprehenderit voluptatem quisquam quae harum. Debitis voluptate eum nihil repudiandae impedit tempora aspernatur officia sed nemo saepe officiis, unde a voluptatum totam. Dolorem, vero est deserunt non magni ratione, quasi eius ipsam voluptatum, beatae quam? Nobis consequuntur vel atque voluptatibus ducimus est vitae ea inventore doloribus excepturi repellat rem laborum natus incidunt, fugit totam magnam culpa officia, ipsa tempora similique, reprehenderit molestias eum sit. Exercitationem quasi corporis vero odio culpa impedit iusto, consequatur inventore placeat temporibus aut odit voluptatum necessitatibus maxime dignissimos iure sint cumque reiciendis quae nobis aliquid doloremque unde in. Ut ab eligendi iste temporibus, earum atque nobis, animi labore debitis repellendus aut natus id aliquid ipsam quis laborum amet. Magnam iure dolor, quos dignissimos repudiandae, nesciunt dicta quod laudantium non, eaque veniam tempora voluptates culpa error unde quis maiores? Adipisci consectetur unde illo doloribus culpa, sit distinctio nemo delectus natus eum deserunt minima obcaecati, nisi asperiores ex eaque. Itaque maxime assumenda temporibus doloribus? Excepturi a, explicabo repellat vitae pariatur assumenda reiciendis animi nobis fugit, consequatur iure saepe. Id nostrum est dicta laboriosam aspernatur tenetur! Tenetur ullam dolores odio corporis dignissimos quos esse asperiores porro vitae alias doloremque deserunt, cum consequuntur tempora. Maxime modi quod voluptates quo quisquam vero sunt facilis fugit! Tempore aut quis quos quae iusto vero, eos, reprehenderit, illo sed sunt quidem odit dolor saepe ab obcaecati ea fugiat. Quas, in incidunt rem laboriosam excepturi a sit ut sunt necessitatibus dolore harum optio sapiente quod corporis ipsa quaerat!</p>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)
