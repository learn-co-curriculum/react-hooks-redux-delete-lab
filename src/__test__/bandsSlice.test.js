import bandsReducer, {
  bandAdded,
  bandRemoved,
} from "../features/bands/bandsSlice";

describe("actions", () => {
  test("bandAdded returns an action with a type of 'bands/bandAdded' and a payload of the new band name", () => {
    expect(bandAdded("test")).toEqual({
      type: "bands/bandAdded",
      payload: "test",
    });
  });

  test("bandRemoved returns an action with a type of 'bands/bandRemoved' and a payload of the ID", () => {
    expect(bandRemoved("1")).toEqual({
      type: "bands/bandRemoved",
      payload: "1",
    });
  });
});

describe("reducer", () => {
  test("returns the correct initial state", () => {
    expect(bandsReducer(undefined, {})).toEqual({ entities: [] });
  });

  test("handles 'bands/bandAdded'", () => {
    expect(bandsReducer({ entities: [] }, bandAdded("test 1"))).toEqual({
      entities: expect.arrayContaining([
        expect.objectContaining({
          name: "test 1",
          id: expect.any(String),
        }),
      ]),
    });

    expect(
      bandsReducer(
        {
          entities: [{ id: "1", name: "test 1" }],
        },
        bandAdded("test 2")
      )
    ).toEqual({
      entities: expect.arrayContaining([
        expect.objectContaining({
          name: "test 1",
          id: expect.any(String),
        }),
        expect.objectContaining({
          name: "test 2",
          id: expect.any(String),
        }),
      ]),
    });
  });

  test("handles 'bands/bandRemoved'", () => {
    expect(
      bandsReducer(
        {
          entities: [
            { id: "1", name: "test" },
            { id: "2", name: "test 2" },
          ],
        },
        bandRemoved("2")
      )
    ).toEqual({
      entities: [{ id: "1", name: "test" }],
    });

    expect(bandsReducer({ entities: [] }, bandRemoved("1"))).toEqual({
      entities: [],
    });
  });
});
